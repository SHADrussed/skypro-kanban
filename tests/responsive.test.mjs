import assert from "node:assert/strict";
import { before, after, test } from "node:test";
import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const widths = [320, 375, 390, 768, 1024, 1440];
const output = path.resolve(process.env.QA_OUTPUT || ".qa");
const url = "http://127.0.0.1:4190";
const titles = [
  "купить вкусные, красные, сочные, мощные помидоры, которые должны называться — томаты. Т.к. есть томатный сок",
  "ОченьДлинноеНазваниеБезПробелов".repeat(6),
  "Следующая карточка",
];
const tasks = titles.map((title, i) => ({
  _id: String(i + 1), title, description: "Проверка адаптивности",
  topic: i ? "Research" : "Web Design", status: "Без статуса", date: "2026-10-21",
}));
// Populate all five columns as well as the long-title column.
for (const [i, status] of ["Нужно сделать", "В работе", "Тестирование", "Готово"].entries()) {
  tasks.push({ ...tasks[2], _id: String(i + 4), title: `Задача ${status}`, status });
}
let browser, server;
let serverOutput = "";
before(async () => {
  await fs.mkdir(output, { recursive: true });
  server = spawn(process.execPath, ["node_modules/vite/bin/vite.js", "preview", "--host", "127.0.0.1", "--port", "4190", "--strictPort"], { windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
  server.stdout.on("data", (data) => serverOutput += data);
  server.stderr.on("data", (data) => serverOutput += data);
  browser = await chromium.launch({ headless: true, ...(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {}) });
  const probe = await browser.newPage();
  let ready = false;
  for (let i = 0; i < 100; i++) {
    assert.equal(server.exitCode, null, serverOutput);
    try { ready = (await probe.goto(url)).ok(); } catch { /* preview starting */ }
    if (ready) break;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  assert.ok(ready, serverOutput);
  await probe.close();
});
after(async () => { await browser?.close(); server?.kill(); });

for (const width of widths) {
  test(`header, cards and navigation at ${width}px`, async () => {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    page.on("requestfailed", (request) => errors.push(request.url()));
    await context.route("https://wedev-api.sky.pro/api/kanban**", (route) => {
      assert.equal(route.request().method(), "GET", "Layout tests must not mutate the real API");
      return route.fulfill({ json: route.request().url().endsWith("/kanban") ? { tasks } : { task: tasks[0] } });
    });
    await context.addInitScript(() => {
      if (!localStorage.getItem("user")) localStorage.setItem("user", JSON.stringify({ token: "qa-fixture", name: "AbigailRobertson@gmail.com", login: "AbigailRobertson@gmail.com" }));
    });
    try {
      await page.goto(url);
      await page.getByRole("article").last().waitFor();
      await page.evaluate(() => document.fonts.ready);
      // Disable only the entrance animation before comparing rectangles.
      await page.addStyleTag({ content: "* { animation: none !important; }" });
      const metrics = await page.evaluate(() => {
        const rect = (e) => e.getBoundingClientRect();
        const cards = [...document.querySelectorAll("article")];
        const escape = cards.flatMap((card) => [...card.querySelectorAll("h3, p")].filter((e) => {
          const a = rect(card), b = rect(e);
          return b.left < a.left - 1 || b.right > a.right + 1 || b.bottom > a.bottom + 1 || e.scrollWidth > e.clientWidth + 1;
        }).map((e) => e.textContent));
        const overlap = cards.some((a, i) => cards.slice(i + 1).some((b) => {
          const x = rect(a), y = rect(b);
          return Math.min(x.right, y.right) > Math.max(x.left, y.left) + 1 && Math.min(x.bottom, y.bottom) > Math.max(x.top, y.top) + 1;
        }));
        const create = document.querySelector("#btnMainNew");
        const profile = document.querySelector("[aria-controls='user-set-target']");
        const logo = document.querySelector("header img");
        const c = rect(create), p = rect(profile), l = rect(logo);
        return { escape, overlap, pageOverflow: document.documentElement.scrollWidth - innerWidth,
          createClipped: create.scrollHeight > create.clientHeight + 1 || create.scrollWidth > create.clientWidth + 1,
          headerOverlap: l.right > p.left + 1 || (innerWidth > 495 && c.right > p.left + 1),
          profileOutside: p.left < 0 || p.right > innerWidth,
        };
      });
      assert.deepEqual(metrics.escape, [], "Card text/date escapes its background");
      assert.equal(metrics.overlap, false, "Card backgrounds overlap");
      assert.ok(metrics.pageOverflow <= 1, "Page overflows horizontally");
      assert.equal(metrics.createClipped, false, "Create label is clipped");
      assert.equal(metrics.headerOverlap, false);
      assert.equal(metrics.profileOutside, false);
      await page.screenshot({ path: path.join(output, `board-${width}.png`), fullPage: true });
      const profile = page.getByRole("button", { name: "Профиль пользователя", exact: true });
      await profile.click();
      const menu = page.locator("#user-set-target");
      assert.equal(await menu.getByText("AbigailRobertson@gmail.com", { exact: true }).count(), 1, "Identical name and login must appear once");
      assert.ok(await menu.evaluate((e) => {
        const r = e.getBoundingClientRect();
        return r.left >= 0 && r.right <= innerWidth && e.scrollWidth <= e.clientWidth + 1;
      }), "Profile menu is clipped");
      await page.screenshot({ path: path.join(output, `menu-${width}.png`), fullPage: true });
      await page.keyboard.press("Escape");
      assert.equal(await profile.getAttribute("aria-expanded"), "false");
      assert.ok(await profile.evaluate((e) => e === document.activeElement));
      await profile.click();
      await page.locator("header img").first().click();
      assert.equal(await profile.getAttribute("aria-expanded"), "false");
      // Distinct, very long name and email must both wrap in the panel.
      await page.evaluate(() => localStorage.setItem("user", JSON.stringify({ token: "qa-fixture", name: "ОченьДлинноеИмя".repeat(8), login: "long.email.address@example.com" })));
      await page.reload();
      await profile.click();
      assert.equal(await menu.locator("p").count(), 3);
      assert.ok(await menu.evaluate((e) => [...e.querySelectorAll("p")].every((p) => p.scrollWidth <= p.clientWidth + 1)));
      await page.keyboard.press("Escape");
      await page.getByRole("link", { name: "Создать новую задачу", exact: true }).click();
      await page.getByText("Создание задачи", { exact: true }).waitFor();
      assert.ok(await page.locator("#popNewCard").evaluate((e) => e.getBoundingClientRect().width <= innerWidth + 1), "New-card overlay exceeds viewport");
      assert.ok(await page.locator("#popNewCard").evaluate((e) => e.scrollWidth <= e.clientWidth + 1), "New-card calendar/categories overflow");
      await page.screenshot({ path: path.join(output, `new-card-${width}.png`), fullPage: true });
      await page.locator("#popNewCard button").first().click();
      assert.equal(new URL(page.url()).pathname, "/");
      await page.getByRole("article").first().getByRole("link").last().click();
      await page.getByRole("button", { name: "Закрыть", exact: true }).first().waitFor();
      assert.ok(await page.locator("#popBrowse").evaluate((e) => e.getBoundingClientRect().width <= innerWidth + 1 && e.scrollWidth <= e.clientWidth + 1), "Card detail exceeds viewport");
      await page.screenshot({ path: path.join(output, `card-detail-${width}.png`), fullPage: true });
      await page.getByRole("button", { name: "Закрыть", exact: true }).first().click();
      assert.deepEqual(errors, []);
      await fs.writeFile(path.join(output, `result-${width}.json`), JSON.stringify({ width, metrics, errors, fixtureNotice: "Synthetic session/tasks; API intercepted. No real API CRUD checked." }, null, 2));
    } finally { await context.close(); }
  });
}

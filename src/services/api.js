import axios from "axios";

const kanbanHost = "https://wedev-api.sky.pro/api/kanban";
const authHost = "https://wedev-api.sky.pro/api/user";

export async function loginUser(userData) {
  const response = await axios.post(authHost + "/login", userData, {
    headers: {
      "Content-Type": "",
    },
  });
  return response.data;
}

export async function registerUser(userData) {
  const response = await axios.post(authHost, userData, {
    headers: {
      "Content-Type": "",
    },
  });
  return response.data;
}

export async function getTasks(token) {
  const response = await axios.get(kanbanHost, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function createTask(taskData, token) {
  const response = await axios.post(kanbanHost, taskData, {
    headers: { "Content-Type": "", Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function getTask(cardId, token) {
  const response = await axios.get(kanbanHost + `/${cardId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function deleteTask(cardId, token) {
  const response = await axios.delete(kanbanHost + `/${cardId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function updateTask(cardId, taskData, token) {
  const response = await axios.put(kanbanHost + `/${cardId}`, taskData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

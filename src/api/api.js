import axios from "axios";
import { user } from "../data";

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

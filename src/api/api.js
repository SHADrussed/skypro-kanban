import axios from "axios";

const kanbanHost = "https://wedev-api.sky.pro/api/kanban";
const authHost = "https://wedev-api.sky.pro/api/user";

export async function loginUser(userData) {
  const response = await axios.post(authHost + "/login", userData, {
    headers: {
      "Content-Type": "",
    },
  });
}

export async function registerUser(userData) {
  const response = await axios.post(authHost, userData, {
    headers: {
      "Content-Type": "",
    },
  });
}

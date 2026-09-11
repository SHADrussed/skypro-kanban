import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import logo from "./images/logo.png";
import logoDark from "./images/logo_dark.png";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopUser from "./components/popups/PopUser/PopUser";

function App() {
  const [user, setUser] = useState({
    name: "Ivan Ivanov",
    email: "ivan.ivanov@gmail.com",
    columns: [
      {
        title: "Без статуса",
        cards: [
          {
            colourTheme: "orange",
            category: "Web design",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
          {
            colourTheme: "green",
            category: "Recearch",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
          {
            colourTheme: "orange",
            category: "Web design",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
          {
            colourTheme: "purple",
            category: "Copywriting",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
        ],
      },
      {
        title: "Нужно сделать",
        cards: [
          {
            colourTheme: "green",
            category: "Recearch",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
        ],
      },
      {
        title: "В работе",
        cards: [
          {
            colourTheme: "green",
            category: "Recearch",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
          {
            colourTheme: "purple",
            category: "Copywriting",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
          {
            colourTheme: "orange",
            category: "Web design",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
        ],
      },
      {
        title: "Тестирование",
        cards: [
          {
            colourTheme: "green",
            category: "Recearch",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
        ],
      },
      {
        title: "Готово",
        cards: [
          {
            colourTheme: "green",
            category: "Recearch",
            title: "Название задачи",
            description: "",
            date: "30.10.23",
          },
        ],
      },
    ],
  });

  return (
    <>
      <PopBrowse />
      <PopNewCard />
      <PopUser />
      <div id="root">
        <div className="wrapper">
          <Header logo={logo} logoDark={logoDark} user={user} />
          <Main user={user} />
        </div>
      </div>

      <script type="module" src="/src/main.jsx"></script>
    </>
  );
}

export default App;

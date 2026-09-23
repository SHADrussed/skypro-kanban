import { useEffect, useState } from "react";

import { Wrapper } from "../components/styles/common";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";

import logo from "../images/logo.png";
import logoDark from "../images/logo_dark.png";

import { GlobalStyles } from "../components/styles/GlobalStyles";
import { getTasks } from "../api/api";

export default function MainPage({ children, user }) {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const isPopupPage = Boolean(children);

  useEffect(() => {
    async function fetchTasks() {
      const fetchedTasks = await getTasks(user.token);
      setTasks(fetchedTasks.tasks);

      setLoading(false);
    }

    fetchTasks();
  }, []);

  return (
    <>
      <GlobalStyles />

      <Wrapper>
        {loading && !isPopupPage ? (
          <h1>Идёт загрузка...</h1>
        ) : (
          <>
            <Header logo={logo} logoDark={logoDark} user={user} />
            <Main tasks={tasks} />
            {children}
          </>
        )}
      </Wrapper>
    </>
  );
}

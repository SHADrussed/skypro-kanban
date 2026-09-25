import { useContext } from "react";

import { Wrapper } from "../components/styles/common";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";

import logo from "../images/logo.png";
import logoDark from "../images/logo_dark.png";

import { GlobalStyles } from "../components/styles/GlobalStyles";
import { TasksContext } from "../contexts/TaskContext";

export default function MainPage({ children }) {
  const { tasks, loading, error } = useContext(TasksContext);
  const isPopupPage = Boolean(children);

  return (
    <>
      <GlobalStyles />

      <Wrapper>
        {error ? (
          <h1>{error}</h1>
        ) : loading && !isPopupPage ? (
          <h1>Идёт загрузка...</h1>
        ) : (
          <>
            <Header logo={logo} logoDark={logoDark} />
            <Main />
            {children}
          </>
        )}
      </Wrapper>
    </>
  );
}

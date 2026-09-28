import { useContext } from "react";

import { Wrapper } from "../components/styles/common";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";

import logo from "../images/logo.png";
import logoDark from "../images/logo_dark.png";

import { GlobalStyles } from "../components/styles/GlobalStyles";
import { TasksContext } from "../contexts/TaskContext";

export default function MainPage({ children }) {
  const { loading, error } = useContext(TasksContext);
  const isPopupPage = Boolean(children);

  return (
    <>
      <GlobalStyles />

      <Wrapper>
        {error ? (
          <h1>{error}</h1>
        ) : loading && !isPopupPage ? (
          <Loader />
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

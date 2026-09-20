import { useEffect, useState } from "react";

import { Wrapper } from "../components/styles/common";
import Main from "../components/Main/Main";
import Header from "../components/Header/Header";

import logo from "../images/logo.png";
import logoDark from "../images/logo_dark.png";

import { user } from "../data";
import { GlobalStyles } from "../components/styles/GlobalStyles";

export default function MainPage({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />

      <Wrapper>
        {loading ? (
          <h1>Идёт загрузка...</h1>
        ) : (
          <>
            <Header logo={logo} logoDark={logoDark} user={user} />
            <Main user={user} />
            {children}
          </>
        )}
      </Wrapper>
    </>
  );
}

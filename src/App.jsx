import { useEffect, useState } from "react";
import { Wrapper } from "./components/styles/common";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import logo from "./images/logo.png";
import logoDark from "./images/logo_dark.png";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopExit from "./components/popups/PopExit/PopExit";
import { user } from "./data";
import { GlobalStyles } from "./components/styles/GlobalStyles";

function App() {
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
      <PopBrowse />
      <PopNewCard />
      <PopExit />
      <Wrapper>
        {loading ? (
          <h1>Идёт загрузка...</h1>
        ) : (
          <>
            <Header logo={logo} logoDark={logoDark} user={user} />
            <Main user={user} />
          </>
        )}
      </Wrapper>
    </>
  );
}

export default App;

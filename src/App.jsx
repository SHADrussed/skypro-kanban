import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import logo from "./images/logo.png";
import logoDark from "./images/logo_dark.png";
import PopBrowse from "./components/popups/PopBrowse/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard/PopNewCard";
import PopUser from "./components/popups/PopUser/PopUser";
import { user } from "./data";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <PopBrowse />
      <PopNewCard />
      <PopUser />
      <div id="root">
        <div className="wrapper">
          {loading ? (
            <h1>Идёт загрузка...</h1>
          ) : (
            <>
              <Header logo={logo} logoDark={logoDark} user={user} />
              <Main user={user} />
            </>
          )}
        </div>
      </div>

      <script type="module" src="/src/main.jsx"></script>
    </>
  );
}

export default App;

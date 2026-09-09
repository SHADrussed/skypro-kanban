import { useState } from "react";
import "./App.css";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="root">
        <Header />
        <Main />
      </div>
      <script type="module" src="/src/main.jsx"></script>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="root"></div>
      <script type="module" src="/src/main.jsx"></script>
    </>
  );
}

export default App;

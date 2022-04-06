import { useState } from "react";
import "./App.css";

import SelfRender from "./components/SelfRender";

function App() {
  const [number, setNumber] = useState(0);
  const increaseNumber = () => setNumber((prevValue) => prevValue + 1);
  return (
    <div className="App">
      <button onClick={increaseNumber}>Click me - {number}</button>
      <SelfRender />
    </div>
  );
}

export default App;

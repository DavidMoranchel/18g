import { useState } from "react";

import "./App.css";

// Components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };

  const isMultiple = count % 5 === 0 && count !== 0 ? true : false;
  const countType = isMultiple ? "Es multiplo de 5" : "No es multiplo de 5";
  const countClass = isMultiple ? "active" : "inactivo";
  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Luis" lastName="Vera"></FullName>
        <p className={countClass}>
          Counter: {count}, {countType}
        </p>
        <button onClick={() => handleClick(true)}>Increase</button>
      </header>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

import "./App.css";

// Components
import Title from "./components/Title";
import FullName from "./components/FullName";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // ARGUMENTO 1: CALLBACK
  // ARGUMENTO 2: nada, [], [count]
  // Caso vacío: el callback del useEffect se ejecuta cada que algo cambie (estado)
  // Caso []: el callback del useEffect se ejecuta solo la primera vez que carga el componente
  // Caso [state]:  el callback del useEffect se ejecuta la primera vez y cada que se actualice el estado que se incluye
  // useEffect(() => {
  //   console.log("ME EJECUTO LA PRIMERA VEZ QUE EL COMPONENTE SE CARGA");
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "ME EJECUTO LA PRIMERA VEZ QUE EL COMPONENTE SE CARGA Y CADA VEZ QUE EL ESTADO SE ACTUALIZA"
  //   );
  // }, [count]);

  useEffect(() => {
    console.log(
      "ME EJECUTO LA PRIMERA VEZ Y SIEMPRE QUE HAYA UNA ACTUALIZACIÓN DEL COMPONENTE"
    );
  });

  const handleClick = (increase) => {
    let newCount = count;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount(newCount);
  };

  const handleClick2 = (increase) => {
    let newCount = count2;
    if (increase) {
      newCount = newCount + 1;
    } else {
      newCount = newCount - 1;
    }
    setCount2(newCount);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Title text="Aaron"></Title>
        <FullName firstName="Luis" lastName="Vera"></FullName>
        <p>Counter: {count}</p>
        <button onClick={() => handleClick(true)}>Increase</button>
        <p>Counter: {count2}</p>
        <button onClick={() => handleClick2(true)}>Increase</button>
      </header>
    </div>
  );
}

export default App;

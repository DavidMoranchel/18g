import { useState } from "react";

import "./App.css";

function App() {
  const [itemActive, setItemActive] = useState(null);

  const isActive = (itemNumber) => itemNumber === itemActive;

  const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
      gender: "m",
      photoURL: "URL VALIDA",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "m",
      photoURL: "URL VALIDA",
    },
  ];

  const animals = ["parrot", "dog", "breaver", "cat"];
  const animalsUI = animals.map((animal, index) => (
    <li key={index}>{animal}</li>
  ));
  console.log(animalsUI);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li
            onClick={() => setItemActive(1)}
            className={`${isActive(1) ? "active" : "inactive"}`}
          >
            Texto 1
          </li>
          <li
            onClick={() => setItemActive(2)}
            className={`${isActive(2) ? "active" : "inactive"}`}
          >
            Texto 2
          </li>
          <li
            onClick={() => setItemActive(3)}
            className={`${isActive(3) ? "active" : "inactive"}`}
          >
            Texto 3
          </li>
          <li
            onClick={() => setItemActive(4)}
            className={`${isActive(4) ? "active" : "inactive"}`}
          >
            Texto 4
          </li>
          <li
            onClick={() => setItemActive(5)}
            className={`${isActive(5) ? "active" : "inactive"}`}
          >
            Texto 5
          </li>
        </ul>

        <ul>{animalsUI}</ul>
      </header>
    </div>
  );
}

export default App;

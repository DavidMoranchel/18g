import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [itemActive, setItemActive] = useState(null);

  const isActive = (itemNumber) => itemNumber === itemActive;

  console.log(itemActive);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        "Esta cargando"
      ) : (
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
        </header>
      )}
    </div>
  );
}

export default App;

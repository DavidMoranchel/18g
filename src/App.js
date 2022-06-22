// Components
import Card from "./components/Card";

import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [amountMXN, setAmountMXN] = useState(null);
  const [amountUSD, setAmountUSD] = useState(null);

  const [koders, setKoders] = useState([
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "Yusef",
      lastName: "Lopéz",
      age: 40,
      gender: "f",
      photoURL: "https://media4.giphy.com/media/5sYyfIMRcpJWNqdySh/giphy.gif",
    },
  ]);

  const kodersUI = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => {
      console.log(firstName);
      return (
        <Card
          key={index}
          photoURL={photoURL}
          firstName={firstName}
          lastName={lastName}
          age={age}
          gender={gender}
        />
      );
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AGREGAR KODER");
    const newKoders = [
      ...koders,
      {
        firstName,
        lastName,
        age,
        gender,
        photoURL,
      },
    ];

    setKoders(newKoders);

    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhotoURL("");
  };

  const handleChangeAmount = ({ target: { value } }, from) => {
    const USD = 20.16;
    // from = USD o MXN
    if (from === "USD") {
      setAmountMXN(value * USD);
      setAmountUSD(value);
    } else {
      setAmountMXN(value);
      setAmountUSD(value / USD);
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="container">{kodersUI}</div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input value={age} onChange={(event) => setAge(event.target.value)} />
        <input
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        />
        <input
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
        />
        <button type="submit">Agregar Koder</button>
      </form>

      <div>
        <input
          type="number"
          value={amountMXN}
          onChange={(e) => handleChangeAmount(e, "MXN")}
        />
        <input
          type="number"
          value={amountUSD}
          onChange={(e) => handleChangeAmount(e, "USD")}
        />
      </div>
    </div>
  );
}

export default App;

// 1. El usuario escribe la cantidad NUMERICA EN PESOS MEXICANOS en el input
// 3. Se renderiza el valor en dolares

// Notas:
// El input no puede recibir letras solo numeros
// El output tiene que estar formateado a dos decimales

// Components
import Card from "./components/Card";

import "./App.css";

function App() {
  const koders = [
    {
      firstName: "Luis",
      lastName: "Vera",
      age: 24,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "Nestor",
      lastName: "Ramírez",
      age: 40,
      gender: "m",
      photoURL: "https://sgame.etsisi.upm.es/pictures/18253.jpg?1621958969/",
    },
    {
      firstName: "David",
      lastName: "Romero",
      age: 28,
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
  ];

  const kodersUI = koders.map(
    ({ firstName, lastName, age, gender, photoURL }, index) => (
      <Card
        key={index}
        photoURL={photoURL}
        firstName={firstName}
        lastName={lastName}
        age={age}
        gender={gender}
      />
    )
  );

  return (
    <div className="App">
      <div className="main-container">
        <div className="container">{kodersUI}</div>
      </div>
    </div>
  );
}

export default App;

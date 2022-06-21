// Component
import CardItemContent from "../CardItemContent";

import "./Card.css";

export default function Card({ photoURL, firstName, lastName, age, gender }) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img alt="profile" src={photoURL} className="card-image" />
      </div>
      <div className="card-content">
        {/* Crear un componente llamado CardItemContent */}
        <CardItemContent title={"Name"} content={`${firstName} ${lastName}`} />
        <CardItemContent title={"Edad"} content={age} />
        <CardItemContent
          title={"Gender"}
          content={gender === "m" ? "Masculino" : "Femenino"}
        />
      </div>
    </div>
  );
}

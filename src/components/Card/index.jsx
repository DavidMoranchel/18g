import "./Card.css";

export default function Card({
  photoURL,
  nickName,
  firstName,
  lastName,
  age,
  gender,
}) {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img alt="profile" src={photoURL} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-item-content">
          <p className="title">Name</p>
          <p className="content">
            {firstName} {lastName}
          </p>
        </div>
        <div className="card-item-content">
          <p className="title">Edad</p>
          <p className="content">{age}</p>
        </div>
        <div className="card-item-content">
          <p className="title">Gender</p>
          <p className="content">{gender === "m" ? "Masculino" : "Femenino"}</p>
        </div>
      </div>
    </div>
  );
}

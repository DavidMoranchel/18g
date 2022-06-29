import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/users";

// CSS
import "./Detail.css";

export default function ProfileDetail() {
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();

  useEffect(() => {
    console.log("PRIMERA VEZ");

    const getUser = async () => {
      const data = await retrieveUser(id);
      setTimeout(() => {
        setUser(data);
      }, 2000);
      console.log(data);
    };

    getUser();
  }, []);

  console.log(id);

  return (
    <div>
      <h2>Detail</h2>
      {!user ? (
        <p>Loading</p>
      ) : (
        <div>
          <img src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
}

// EJERCICIO: EDIT PROFILE
// 1. Recibir variable de la URL
// 2. Consultar la información en la DB (firebase)
// 3. Cuando se tenga disponible la información,
// ACTUALIZAR EL ESTADO DE LOS INPUTS
// 4. Crear formulario
// 5. Enviar PATCH a firebase

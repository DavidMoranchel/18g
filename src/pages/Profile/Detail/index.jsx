import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { retrieve as retrieveUser } from "../../../services/users";

// CSS
import "./Detail.css";

export default function ProfileDetail() {
  // Local state
  const [user, setUser] = useState(null);

  // RRD
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const data = await retrieveUser(id);
      setUser(data);
    };

    getUser();
  }, [id]);

  console.log(id);

  return (
    <div>
      <h2>Detail</h2>
      {!user ? (
        <p>Loading</p>
      ) : (
        <div>
          <img alt="profile" src={user.photoURL} />
          <p>
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
          <button onClick={() => navigate(-1)}>Regresar</button>
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

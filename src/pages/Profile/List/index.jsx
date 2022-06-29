import { useEffect, useState } from "react";
import { list as listUsers } from "../../../services/users";
import { useNavigate } from "react-router-dom";

export default function ProfileList() {
  // Local state
  const [users, setUsers] = useState([]);

  // RRD
  const navigate = useNavigate();

  useEffect(() => {
    const list = async () => {
      const data = await listUsers();
      const parsedUsers = Object.keys(data).map((key) => {
        return { id: key, ...data[key] };
      });

      setUsers(parsedUsers);
    };

    list();
  }, []);

  const buildUsers = (user, index) => (
    <div key={index}>
      <p>
        {user.firstName} {user.lastName}
      </p>

      <button onClick={() => navigate(user.id)}>Detalle</button>
      <button onClick={() => navigate(`edit/${user.id}`)}>Editar</button>
    </div>
  );

  console.log(users);

  return (
    <div>
      <h2>List</h2>
      {users.map(buildUsers)}
    </div>
  );
}

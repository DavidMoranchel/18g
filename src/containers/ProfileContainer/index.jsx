import { Outlet, Link } from "react-router-dom";

// CSS
import "./ProfileContainer.css";

export default function ProfileContainer() {
  return (
    <div className="Profile-container">
      <h1>Profile</h1>
      <div className="Profile-nav">
        <nav>
          <Link to="">Detalle</Link>
          <Link to="edit">Edit</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

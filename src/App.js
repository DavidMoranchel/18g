import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Components
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Cambiar a componente */}
        <Route path="about" element={<p>I'm in about page</p>} />
        {/* Agregar ruta y componente de perfil */}
      </Routes>
    </div>
  );
}

export default App;

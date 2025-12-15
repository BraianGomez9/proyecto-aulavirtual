import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />

      <h1>404</h1>
      <h2>Página no encontrada</h2>

      <p>La ruta que estás buscando no existe.</p>

      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;

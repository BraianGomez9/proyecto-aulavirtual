import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserProvider";

const AuthUser = ({ children }) => {
  const { currentUser, loadingUser } = useContext(UserContext);


  if (loadingUser) {
    return <p>Cargando...</p>; 
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (currentUser.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthUser;


import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "../../context/UserProvider";

const AuthUser = ({ children }) => {
  const { currentUser } = useContext(UserContext);


  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }


  if (currentUser.username !== "admin") {
    return <Navigate to="/" replace />;
  }


  return children;
};

export default AuthUser;

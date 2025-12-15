import { createContext, useState, useEffect } from "react";
import { fakeUsers } from "../db/fakeUsers.js";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");

    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }

    setLoadingUser(false);
  }, []);

  const login = (username, password) => {
    const userFound = fakeUsers.find(
      u => u.username === username && u.password === password
    );

    if (!userFound) return false;

    setCurrentUser(userFound);
    localStorage.setItem("currentUser", JSON.stringify(userFound));
    return true;
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <UserContext.Provider value={{ currentUser, loadingUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

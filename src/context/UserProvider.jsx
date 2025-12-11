import { createContext, useState, useEffect } from "react";
import { fakeUsers } from "../db/fakeUsers";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);


  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) setCurrentUser(savedUser);
  }, []);

  const login = (username, password) => {
    const userFound = fakeUsers.find(
      (u) => u.username === username && u.password === password
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
    <UserContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { BaseUrl } from "../common/constants";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const login = async (inputs) => {
    const res = await axios.post(`${BaseUrl}auth/login`, inputs);
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await axios.post(`${BaseUrl}auth/logout`);
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

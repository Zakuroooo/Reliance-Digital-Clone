import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(""); // State to store username

  const login = (user) => {
    setIsAuthenticated(true);
    setUsername(user); // Store username on login
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(""); // Clear username on logout
    alert("You have successfully logged out.");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

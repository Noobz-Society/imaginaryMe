import React, { createContext, useState, useEffect } from 'react';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const token = cookies.get("TOKEN");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    if(token){
      setIsLoggedIn(true);
    }
   
  };

  const handleLogout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

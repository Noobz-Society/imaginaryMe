import React, { createContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['TOKEN']);

  useEffect(() => {
    // Check if the user is already logged in
    const token = cookies.TOKEN;
    if (token) {
      setIsLoggedIn(true);
    }
  }, [cookies.TOKEN]);

  const handleLogin = (token) => {
    setCookie('TOKEN', token, { path: '/' });
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    removeCookie('TOKEN');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

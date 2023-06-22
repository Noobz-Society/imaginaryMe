import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Protected({ children, admin }) {
  const token = cookies.get("TOKEN");
  if (!token) {
    return <Navigate to="/" replace />
  }
  if (admin) {
    
    const tokenData = JSON.parse(atob(token.split('.')[1]));
    const userRole = tokenData.role;

    if (userRole !== 'admin') {
      // If the user doesn't have the required role, redirect to the home page
      return <Navigate to="/" replace />;
    }
  }
  return children
}
export default Protected

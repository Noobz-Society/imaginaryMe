import React from 'react'
import { Navigate } from 'react-router-dom'
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Protected({ isSignedIn, children }) {
  const token = cookies.get("TOKEN");
  if (!token) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected

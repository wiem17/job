import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../auth/useUser";

const PrivateRoute = ({ children }) => {
  const user = useUser();
  return user ? children : <Navigate to="/" />;
};
export default PrivateRoute;

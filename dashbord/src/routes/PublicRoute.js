import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../auth/useUser";

function PublicRoute({ children }) {
  const user = useUser();
  return user ? <Navigate to="/admin-dashboard"/> : children;
}

export default PublicRoute;

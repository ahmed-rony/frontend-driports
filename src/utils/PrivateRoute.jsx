import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

export const PrivateRoute = ({ children, ...rest }) => {

  return currentUser?.data?.username ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

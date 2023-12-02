import React from "react";
import { Navigate, Routes } from "react-router";
import { Route } from "react-router";
import Auth from "../../../../firebase.config";

const ProtectedRoute = ({ path, element }) => {
  const currentUser = Auth.currentUser();

  return currentUser ? (
    <Routes>
      {" "}
      <Route exact path={path} element={element} />
    </Routes>
  ) : (
    <Navigate to="/sign-in" />
  );
};

export default ProtectedRoute;

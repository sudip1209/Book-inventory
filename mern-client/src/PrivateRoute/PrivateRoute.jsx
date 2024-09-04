import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom"; // Import Navigate from react-router-dom
import { AuthContext } from "../contects/AuthProvider"; // Make sure the path to AuthProvider is correct
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="center-aligned spinner example" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

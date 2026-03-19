import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../authContext";
import Loader from "../../shared/components/Loader";

const Protected = ({ children }) => {
  const { user, loading, isInitialized } = useContext(authContext);

  // Wait for auth initialization to complete
  if (!isInitialized || loading) {
    return <Loader />;
  }

  // If no user after initialization, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, render protected content
  return children;
};

export default Protected;

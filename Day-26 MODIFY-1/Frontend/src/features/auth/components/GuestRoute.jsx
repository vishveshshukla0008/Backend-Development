import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../authContext";
import Loader from "../../shared/components/Loader";

const GuestRoute = ({ children }) => {
  const { user, loading, isInitialized } = useContext(authContext);

  // Wait for auth initialization
  if (!isInitialized || loading) {
    return <Loader />;
  }

  // If user is authenticated, redirect to home
  if (user) {
    return <Navigate to="/" replace />;
  }

  // Not authenticated, allow access to guest routes
  return children;
};

export default GuestRoute;

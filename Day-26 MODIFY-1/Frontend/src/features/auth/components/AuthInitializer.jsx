import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const AuthInitializer = ({ children }) => {
  const { handleGetMe } = useAuth();

  useEffect(() => {
    handleGetMe();
  }, []);

  return children;
};

export default AuthInitializer;

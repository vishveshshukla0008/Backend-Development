import { createContext, useState } from "react";
import { login, register, getMe } from "./services/auth.api.js";
import toast from "react-hot-toast";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    const toastId = toast.loading("Logging in...");
    setLoading(true);
    try {
      const { user } = await login(data);
      toast.success("Logged in successfully", { id: toastId });
      setUser(user);
    } catch (error) {
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      toast.error(message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (data) => {
    let toastId = toast.loading("Registering, Please wait...");
    try {
      setLoading(true);
      const response = await register(data);
      toast.success("Registered successfully", { id: toastId });
      setUser(response.user);
      return response;
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ loading, user, handleLogin, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
}

import { createContext, useState, useEffect } from "react";
import { getMe } from "./services/auth.api";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize auth on mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const hasSessionFlag = localStorage.getItem("hasSession");

        // If we have a session flag, try to fetch user
        // Otherwise, the user is definitely not logged in
        if (hasSessionFlag === "true") {
          try {
            // Fetch user from backend - backend verifies session via HTTP-only cookies
            const res = await getMe();
            setUser(res.user);
            // Keep session flag
          } catch (error) {
            // Session invalid, clear flag
            localStorage.removeItem("hasSession");
            setUser(null);
          }
        } else {
          // No session, user is null
          setUser(null);
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        setUser(null);
      } finally {
        setLoading(false);
        setIsInitialized(true);
      }
    };

    initializeAuth();
  }, []);

  const updateUser = (userData) => {
    setUser(userData);
    if (userData) {
      // SECURITY: Only store a flag, NOT the user data
      // Actual auth token stays in HTTP-only cookies
      localStorage.setItem("hasSession", "true");
    } else {
      localStorage.removeItem("hasSession");
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        setUser: updateUser,
        loading,
        setLoading,
        isInitialized,
      }}>
      {children}
    </authContext.Provider>
  );
};

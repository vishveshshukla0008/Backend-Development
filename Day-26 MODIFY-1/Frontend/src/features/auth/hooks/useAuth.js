import { useContext, useCallback } from "react";
import { authContext } from "../authContext";
import { toast } from "react-hot-toast";
import { getMe, login, logout, register } from "../services/auth.api";

const useAuth = () => {
    const context = useContext(authContext);
    const { user, setUser, loading, setLoading, isInitialized } = context;

    const handleLogin = useCallback(async (data) => {
        const toastId = toast.loading("Loading.. please wait");
        try {
            setLoading(true);
            const res = await login(data);
            setUser(res.user);
            toast.success(res.message, { id: toastId });
            return res;
        } catch (error) {
            console.log(error.response);
            toast.error(error.response?.data?.message || "Login failed", {
                id: toastId,
            });
            throw error;
        } finally {
            setLoading(false);
        }
    }, [setUser, setLoading]);

    const handleRegister = useCallback(async (data) => {
        const toastId = toast.loading("Loading.. please wait");
        try {
            setLoading(true);
            const res = await register(data);
            setUser(res.user);
            toast.success(res.message, { id: toastId });
            return res;
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Registration failed", {
                id: toastId,
            });
            throw error;
        } finally {
            setLoading(false);
        }
    }, [setUser, setLoading]);

    const handleGetMe = useCallback(async () => {
        try {
            setLoading(true);
            const res = await getMe();
            setUser(res.user);
            return res;
        } catch (error) {
            console.log("Auth session expired:", error.message);
            setUser(null);
            throw error;
        } finally {
            setLoading(false);
        }
    }, [setUser, setLoading]);

    const handleLogout = useCallback(async () => {
        try {
            setLoading(true);
            const toastId = toast.loading("Logging out.. please wait");
            const data = await logout();
            setUser(null);
            toast.success(data.message, { id: toastId });
            return data;
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed");
            throw error;
        } finally {
            setLoading(false);
        }
    }, [setUser, setLoading]);

    return {
        handleLogin,
        handleRegister,
        handleGetMe,
        handleLogout,
        loading,
        user,
        isInitialized,
    };
};

export default useAuth;


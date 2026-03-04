import { useContext } from "react";
import { authContext } from "../authContext";
import { toast } from "react-hot-toast";
import { getMe, login, logout, register } from "../services/auth.api";

const useAuth = () => {
    const context = useContext(authContext);
    const { user, setUser, loading, setLoading } = context;


    const handleLogin = async (data) => {
        try {
            setLoading(true);
            const toastId = toast.loading("Loading.. please wait")
            const data = await login(data);
            setUser(data.user);
            toast.success(data.message, { id: toastId });
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }


    const handleRegister = async (data) => {
        try {
            setLoading(true);
            const toastId = toast.loading("Loading.. please wait")
            const data = await register(data);
            setUser(data.user);
            toast.success(data.message, { id: toastId });
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }

    const handleGetMe = async (data) => {
        try {
            setLoading(true);
            const toastId = toast.loading("Loading.. please wait")
            const data = await getMe();
            setUser(data.user);
            toast.success(data.message, { id: toastId });
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }

    const handleLogout = async () => {
        try {
            setLoading(true);
            const toastId = toast.loading("Loading.. please wait")
            const data = await logout();
            setUser(data.user);
            toast.success(data.message, { id: toastId });
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            setLoading(false);
        }
    }


    return { handleLogin, handleRegister, handleGetMe, handleLogout }
}

export default useAuth


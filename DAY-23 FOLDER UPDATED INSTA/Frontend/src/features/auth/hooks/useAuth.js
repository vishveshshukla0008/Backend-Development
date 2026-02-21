import { useContext } from "react";
import { AuthContext } from "../auth.context";
import toast from "react-hot-toast";
import { login, register } from "../services/auth.api";



export const useAuth = () => {
    const context = useContext(AuthContext);

    const { user, setUser, loading, setLoading } = context;

    const handleLogin = async (data) => {
        try {
            setLoading(true);
            const response = await login(data);
            setUser(response.user)
            toast.success(response.message);
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false);
        }
    }

    const handleRegister = async (data) => {
        try {
            setLoading(true);
            const response = await register(data);
            setUser(response.user)
            toast.success(response.message);
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false);
        }
    }

    return { user, handleLogin, handleRegister, loading }
}
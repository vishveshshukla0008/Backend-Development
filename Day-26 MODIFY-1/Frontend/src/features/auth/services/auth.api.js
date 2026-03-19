import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/auth",
    withCredentials: true,
});

// Response interceptor to handle auth errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // If 401 (Unauthorized), clear the stored user
        if (error.response?.status === 401) {
            localStorage.removeItem("user");
        }
        return Promise.reject(error);
    }
);

export const getMe = async () => {
    try {
        const response = await api.get("/getme");
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const register = async (data) => {
    try {
        const response = await api.post("/register", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (data) => {
    try {
        const response = await api.post("/login", data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await api.get("/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
};
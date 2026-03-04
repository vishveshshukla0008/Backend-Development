import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/auth",
    withCredentials: true,
});


export const getMe = async () => {
    try {
        const response = await api.get("/getme");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const register = async (data) => {
    try {
        const response = await api.post("/register", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const login = async (data) => {
    try {
        const response = await api.post("/login", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const logout = async () => {
    try {
        const response = await api.get("/logout");
        return response.data;
    } catch (error) {
        throw error;
    }
}
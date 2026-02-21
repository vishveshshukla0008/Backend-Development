import axios from "axios";

// craete a instance  :

const api = axios.create({
    baseURL: "http://localhost:8080/api/auth",
    withCredentials: true
})


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
        throw error
    }
}

export const getMe = async () => {
    try {
        const response = await api.get("/me");
        return response.data;
    } catch (error) {
        throw error
    }
}
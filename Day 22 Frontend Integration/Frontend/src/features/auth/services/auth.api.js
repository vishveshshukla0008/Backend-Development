import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: "http://localhost:8080/api/auth",
    withCredentials: true,
});

export async function getMe() {
    try {
        const response = await api.get("/me");
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function register(data) {
    console.log("data in api", data)
    try {
        const response = await api.post("/register", data);

        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function login(data) {
    try {
        const response = await api.post("/login", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

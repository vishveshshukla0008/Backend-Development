import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/posts",
    withCredentials: true
})


export const getFeed = async () => {
    try {
        const response = await api.get("/feed/all");
        return response.data;
    } catch (error) {
        throw error
    }
}


export const createPost = async (data) => {
    try {
        const response = await api.post("/", data);
        return response.data;
    } catch (error) {
        throw error;
    }
}



export const getAllPosts = async () => {
    try {
        const response = await api.get("/");
        return response.data;
    } catch (error) {
        throw error
    }
}

export const getPostDetails = async (id) => {
    try {
        const resopnse = await api.get(`/${id}`);
        return resopnse.data;
    } catch (error) {
        throw error
    }
}


export const deletePost = async (id) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        throw error
    }
}


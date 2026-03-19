import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8080/api/song",
    withCredentials: true
})


export async function uploadSong(data) {
    try {
        const response = await api.post("/upload", data);
        return response.data;
    }
    catch (err) {
        throw err;
    }
}


export async function getPlaylist(mood) {
    try {
        const response = await api.get(`/getPlaylist?mood=${mood}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
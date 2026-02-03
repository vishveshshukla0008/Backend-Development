import axios from "axios";



const api = axios.create({
    baseURL: 'https://backend-development-1-60nl.onrender.com/api',
});

export const getNotes = async () => {
    try {
        const res = await api.get("/notes");
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const addNotes = async (data) => {
    try {
        const res = await api.post("/notes", { title: data.title, description: data.description });
        await getNotes()
        return res;
    } catch (err) {
        console.log(err);
    }
}

export const deleteNotes = async (noteId) => {
    try {
        let res = await api.delete(`/notes/${noteId}`)
        return res;
    } catch (err) {
        console.log(err)
    }
}

export const updateNotes = async (data) => {
    try {
        const res = await api.put(`/notes/update/${data.id}`, { title: data.title, description: data.description });
        return res;
    } catch (error) {
        console.log(error)
    }
}

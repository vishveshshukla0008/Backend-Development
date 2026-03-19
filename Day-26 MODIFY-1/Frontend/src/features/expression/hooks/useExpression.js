import React, { useContext } from 'react'
import { ExpressionContext } from '../expression.context'
import toast from 'react-hot-toast';
import { getPlaylist, uploadSong } from '../services/api.expression';

const useExpression = () => {


    const { playingSong, setPlayingSong, setPlaylist, playlist, loadingPlaylist, setLoadingPlaylist, mood, setMood } = useContext(ExpressionContext);


    async function suggestPlaylist(mood) {
        const toastId = toast.loading("Suggesting songs playlist..");
        try {
            setLoadingPlaylist(true);
            const res = await getPlaylist(mood);
            console.log(res)
            setPlaylist(res.playlist);
            toast.success(res.message, { id: toastId });
        } catch (error) {
            toast.error(error.response.data.message, { id: toastId });
        }
        finally {
            setLoadingPlaylist(false)
        }
    }

    async function handleAddSong(data) {
        const toastId = toast.loading("Verifing data...");
        try {
            const res = await uploadSong(data);
            toast.success(res.message, { id: toastId });
        } catch (err) {
            toast.error(err.response.data.message, { id: toastId });
        }
    }


    return (
        { playingSong, mood, setMood, playlist, loadingPlaylist, suggestPlaylist, handleAddSong }
    )
}

export default useExpression;
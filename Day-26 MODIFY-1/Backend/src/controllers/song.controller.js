const id3 = require("node-id3");
const songsModel = require("../models/song.model");
const asyncWrapper = require("../utils/asyncWrapper");
const AppError = require("../utils/AppError");
const { uploadFile } = require("../services/storage.service");


const uploadSongController = asyncWrapper(async (req, res) => {
    const songBuffer = req.file.buffer;
    const { mood } = req.body;
    const tags = id3.read(songBuffer);

    const [songFile, posterFile] = await Promise.all([
        uploadFile({
            buffer: songBuffer,
            filename: tags.title + ".mp3",
            folder: "/moodify/songs",
        }),
        uploadFile({
            buffer: tags.image.imageBuffer,
            filename: tags.title + ".jpeg",
            folder: "/moodify/posters",
        }),
    ]);


    const song = await songsModel.create({
        title: tags.title,
        url: songFile.url,
        posterUrl: posterFile.url,
        mood
    })


    return res.status(201).json({ success: true, message: "Song added Successfully", song })
});


const getSongsPlaylist = asyncWrapper(async (req, res) => {
    const { mood } = req.query;


    const playlist = await songsModel.find({ mood });

    return res.status(200).json({ success: true, message: `Playlist - ${mood} mood`, playlist })
});





module.exports = { uploadSongController, getSongsPlaylist };

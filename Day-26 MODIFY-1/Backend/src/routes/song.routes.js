const upload = require("../middlewares/upload.middleware");
const authController = require("../controllers/song.controller");

const songsRouter = require("express").Router();

songsRouter.post("/upload", upload.single("song"), authController.uploadSongController)

songsRouter.get("/getPlaylist", authController.getSongsPlaylist);
module.exports = { songsRouter };
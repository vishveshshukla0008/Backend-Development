const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const errorHandler = require("./middlewares/ErrorHandler");
const { authRouter } = require("./routes/auth.routes");
const { songsRouter } = require("./routes/song.routes");

app.use(express.json());
app.use(cookieParser());



// routes :
app.use("/api/auth", authRouter);
app.use("/api/song", songsRouter);

app.use(errorHandler);


module.exports = app;
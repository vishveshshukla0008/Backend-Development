//server config code :
const express = require("express"); // requiring express package
const app = express(); //creating server instance :
const notesRoutes = require("./routes/notes.routes.js")

app.use(express.json()); // Making capable the server for read data in req.body;

// Handle request in routes

app.use("/api/notes", notesRoutes)


module.exports = app;
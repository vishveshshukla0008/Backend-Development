//server config code :
const express = require("express"); // requiring express package
const app = express(); //creating server instance :
const notesRoutes = require("./routes/notes.routes.js")
const cors = require("cors");
const path = require("path"); // Node js module

app.use(express.json()); // Making capable the server for read data in req.body;
app.use(cors()); //start accepting the cross origin requests on server :
app.use(express.static("./public"))

// Handle request in routes

app.use("/api/notes", notesRoutes);
app.use("*name", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "/public/index.html"));
})


module.exports = app;
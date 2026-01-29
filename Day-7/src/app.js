const express = require("express");
const noteModel = require("./models/notes.model")


const app = express();
app.use(express.json())


app.get("/notes", async (req, res) => {
    const allNotes = await noteModel.find(); // return the data in [{}, {}]
    res.status(200).json({ message: "Notes Fetched Successfully", allNotes })
})


app.post("/notes", async (req, res) => {
    let { title, description } = req.body;
    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({ message: "Note created Successfully", note })
})
module.exports = app;


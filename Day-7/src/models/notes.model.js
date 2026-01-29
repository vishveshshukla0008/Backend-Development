const mongoose = require("mongoose");


const notesSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = new mongoose.model("note", notesSchema);

module.exports = noteModel;
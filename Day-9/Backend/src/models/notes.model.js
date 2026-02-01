const { Schema, model } = require("mongoose");

const notesSchema = new Schema({
    title: String,
    description: String
})

const notesModel = new model("notes", notesSchema);

module.exports = notesModel;
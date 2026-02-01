const notesModel = require("../models/notes.model")

const getAllNotesController = async (req, res) => {
    try {
        const allNotes = await notesModel.find();
        if (!allNotes.length) return res.status(200).json({ message: "No notes found", allNotes })


        return res.status(200).json({ message: "Fetched Success", allNotes })
    } catch (err) {
        return res.status(500).json({
            message: "Failed to fetch notes",
            error: err.message
        });
    }
}

const addNotesController = async (req, res) => {
    try {
        let { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description is required to add notes"
            });
        }

        let note = await notesModel.create({ title, description });


        if (!note) return res.status(500).json({ message: "Internal server error ! Note not added" })

        return res.status(201).json({
            message: "Notes Created Successfully",
            note
        });

    } catch (error) {
        return res.status(500).json({
            message: "Failed to create note",
            error: error.message
        });
    }
};

const updateNotesController = async (req, res) => {
    try {
        if (!req.params.id || !req.body) return res.status(400).json({ message: "Credentials not provided" })
        const { id } = req.params;
        const { title, description } = req.body;
        const note = await notesModel.findById(id);
        if (!note) return res.status(500).json({ message: "Notes doesn't exist" })


        note.title = title;
        note.description = description;

        const updatedNote = await note.save();
        res.status(200).json({ message: "Notes Updated Successfully", updatedNote })
    } catch (err) {
        return res.status(500).json({ message: "Failed to update the notes !", error: err.message })
    }
}

const deleteNotesController = async (req, res) => {
    try {
        let { id } = req.params;
        let deletedNote = await notesModel.findByIdAndDelete(id);
        if (!deletedNote) return res.status(400).json({ message: "Note not found" })
        res.status(200).json({ message: "Notes deleted successfully", deletedNote });
    } catch (error) {
        return res.status(500).json({ error: "Error in deleting Notes" })
    }
}

const fetchSingleNotesController = async (req, res) => {
    try {
        let { id } = req.params;
        let note = await notesModel.findById(id);
        if (!note) return res.status(400).json({ message: "Note not found" });
        return res.status(200).json({ message: "Notes Fetched Successfully", note });
    } catch (err) {
        return res.status(400).json({ message: "Failed to fetch" })
    }
}

module.exports = { getAllNotesController, addNotesController, updateNotesController, deleteNotesController, fetchSingleNotesController }
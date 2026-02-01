const express = require("express");
const { getAllNotesController, addNotesController, updateNotesController, fetchSingleNotesController, deleteNotesController } = require("../controllers/notes.controller");


const router = express.Router();

router.route("/")
    .get(getAllNotesController)
    .post(addNotesController)

router.route("/:id")
    .get(fetchSingleNotesController)
    .delete(deleteNotesController)


router.route("/update/:id")
    .put(updateNotesController)



module.exports = router
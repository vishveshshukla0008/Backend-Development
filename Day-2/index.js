const express = require('express');


const app = express();

app.use(express.json())

const notes = [];

app.get("/notes", (req, res) => {
    res.json({
        message: "All notes",
        notes
    })
})

app.post("/notes", (req, res) => {
    notes.push(req.body)
    res.send("Added Success")
})

app.patch("/notes/:index", (req, res) => {
    console.log(notes[req.params.index]);
    notes[req.params.index].title = req.body.title;
    res.send("Updated :")
})

app.put("/notes/:index", (req, res) => {
    notes[req.params.index].title = req.body.title;
    notes[req.params.index].description = req.body.description;
    req.send("All data updated")
})

app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index];
    res.json({
        message: "Success",
        notes
    });
})




app.listen(8080, () => {
    console.log("Application is running on server 8080");
})
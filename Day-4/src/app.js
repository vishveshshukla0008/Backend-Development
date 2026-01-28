const express = require("express");

const app = express();


app.get("/", (req, res) => {
    res.send("Let me run the server first Please")
})



module.exports = app;


const express = require("express");
const cookirParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes.js");

const app = express(); // creating a server instance  :
app.use(cookirParser()); // Hamne apne server ko cookie get and set karne layak bana diya hai :

app.use(express.json()); // alowing the json Data in body of request



app.use("/api/auth", authRoutes)


module.exports = app;
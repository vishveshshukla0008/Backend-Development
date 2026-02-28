const express = require("express");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler");
const authRoutes = require("./routes/auth.routes")

const app = express();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)


app.use(errorHandler)
module.exports = app;
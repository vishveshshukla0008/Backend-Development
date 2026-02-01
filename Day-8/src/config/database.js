const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://vishveshshukla82_db_user:Fkzn4SKFz0GJKT0c@cluster0.yec8ffx.mongodb.net/NewProject/NewProject");
        console.log("Database Connected Successfully !");
    } catch (err) {
        console.error("Database connection error !", err)
    }
}

module.exports = connectDB;
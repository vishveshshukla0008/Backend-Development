// server ko connect karna 
// Database ko connect karna 

const app = require("./src/app.js");
const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("mongodb+srv://vishveshshukla82_db_user:Merapass@cluster0.hssxylq.mongodb.net/day-6").then(() => {
        console.log("Connected to DB");
    }).catch((err) => {
        console.log(err);
    })
}

connectToDatabase()




app.listen(8080, () => {
    console.log("Application is running on 8080")
})

// mongoose.connect()  connecting the app with database


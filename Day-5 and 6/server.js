const app = require("./src/app");

const mongoose = require("mongoose");

// function connectToDB() {
//     mongoose.connect("mongodb+srv://vishveshshukla82_db_user:Fkzn4SKFz0GJKT0c@cluster0.yec8ffx.mongodb.net/?appName=Cluster0").then(() => {
//         console.log("Database has been connected !")
//     }).catch(err => console.log(err))
// }
// 
// connectToDB()

function localDb() {
    mongoose.connect("mongodb://localhost:27017/myfirstDB").then(() => {
        console.log("Database has been connected !")
    }).catch(err => console.log(err))
}


localDb()



app.listen(3000, () => {
    console.log("Listening on port 8080");
})

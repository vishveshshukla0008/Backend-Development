require("dotenv").config();
const app = require("./src/app.js")
const connectDB = require("./src/config/db.js");



async function startServer() {
    try {
        await connectDB();
        app.listen(process.env.PORT, () => {
            console.log(`Server has been start on port no ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error.message);
    }
}

startServer();
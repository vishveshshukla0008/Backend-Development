// server running code
require("dotenv").config();
const app = require("./src/app")
const connectDb = require("./src/config/db")


async function startServer() {
    try {
        await connectDb();
        app.listen(process.env.PORT, () => {
            console.log(`Application is runnning on port - ${process.env.PORT}`)
        })
    } catch (err) {
        console.log("Error in connecting server", err.message)
    }
}

startServer()
require("dotenv").config();
const app = require("./src/app.js");
const connectToDatabase = require("./src/config/database.js");

async function startServer() {
    try {
        await connectToDatabase()
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error("Error starting the server:", error);
    }
}

startServer();
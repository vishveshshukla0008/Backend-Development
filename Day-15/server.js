// is file ka kam hai environement variables ko accesible bana dena and database se connect kar dena at the end of the day => server ko start kar dena :

require("dotenv").config();

const app = require("./src/app.js");
const connectDb = require("./src/config/db.js")


async function startServer() {
    try {
        await connectDb();
        app.listen(process.env.PORT, () => {
            console.log(`Server is starting on port no. ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("Error in starting server ", error);
    }
}


startServer();
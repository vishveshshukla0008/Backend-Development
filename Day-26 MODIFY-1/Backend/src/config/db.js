const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");
const mongoose = require("mongoose");


async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected ! ")
    } catch (error) {
        console.log("Error in Database Connection :");
        console.log(error.message);
    }
}

module.exports = connectDB;
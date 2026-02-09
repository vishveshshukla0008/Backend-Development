const mongoose = require("mongoose");
const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected . .. ...");
    } catch (err) {
        console.log("Database Connection Error :", err.message);
    }
}

module.exports = connectDb;

require("dotenv").config()
const app = require("./src/app");
const connectToDb = require("./src/config/database.js");
const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

connectToDb()

app.listen(8080, () => {
    console.log("Application is started")
})
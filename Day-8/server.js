require("dotenv").config();
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]); dns.setDefaultResultOrder("ipv4first");
const app = require("./src/app");
const connectDB = require("./src/config/database");

connectDB()


app.listen(process.env.PORT, () => {
    console.log("Application server is listening on 8080")
})
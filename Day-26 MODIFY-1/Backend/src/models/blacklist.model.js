const mongoose = require("mongoose");


const blackListTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: [true, "Token is required"]
    }
}, { timestamps: true })

const blacklistModel = new mongoose.model("blacklistToken", blackListTokenSchema);

module.exports = blacklistModel;
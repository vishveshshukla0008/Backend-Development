const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true
        },
        username: {
            type: String,
            required: [true, "Username is required"],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [8, "Password must be at least 8 characters"],
            maxlength: [16, "Password must be at most 16 characters"]
        }
    },
    { timestamps: true }
);

const userModel = mongoose.model("User", userSchema)
module.exports = userModel;

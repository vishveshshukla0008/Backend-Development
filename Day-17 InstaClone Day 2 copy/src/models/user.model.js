const mongoose = require("mongoose");

// create a schema for user :
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "User name already exists !"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "Email already registered !"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    bio: String,
    profileImage: {
        type: String,
        default: "https://ik.imagekit.io/s3d4yznrb/Instagram%20Clone/user.jpg"
    }
});


const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
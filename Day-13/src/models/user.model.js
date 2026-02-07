const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email must be unique"],
    },

    username: {
        type: String,
        unique: [true, "username already used"],
    },

    password: {
        type: String,
        minlength: [8, "Password must be at least 8 characters long"],
    },
}, {
    timestamps: true
})

const userModel = model("user", userSchema);


module.exports = userModel;

const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imageUrl: {
        type: String,
        required: [true, "Image is required to do post :"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Users Id is required to create a post :"]
    },
})

const postModel = new mongoose.model("post", postSchema);

module.exports = postModel;
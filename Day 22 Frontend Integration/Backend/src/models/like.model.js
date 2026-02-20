const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
        },
        post: {
            type: mongoose.Types.ObjectId,
            ref: "posts",
            required: [true, "A post is required"],
        },
        reactionType: {
            type: String,
            default: "like",
            enum: {
                values: ['like', 'love', 'support', 'sad', 'wow', 'funny'],
                message: "Invalid reaction type !"
            },
        }
    },
    { timestamps: true },
);

likeSchema.index({ username: 1, post: 1 }, { unique: true });

// create a model :

const likeModel = new mongoose.model("like", likeSchema);


module.exports = likeModel;

const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");
const postModel = require("../models/post.model");
const likeModel = require("../models/like.model");

const followController = async (req, res) => {
    const followerUserName = req.user.username;
    const followeeUserName = req.params.username;

    if (followerUserName === followeeUserName)
        return res
            .status(401)
            .json({ success: false, message: "You cant follow yourself" });

    // check for already followed :
    const alreadyFollowed = await followModel.findOne({
        follower: followerUserName,
        followee: followeeUserName,
    });

    if (alreadyFollowed)
        return res.status(200).json({
            success: true,
            message: `You are already following to ${followeeUserName}`,
        });

    const followeeUser = await userModel.findOne({ username: followeeUserName });

    if (!followeeUser)
        return res.status(404).json({
            success: false,
            message: "The user you want to follow them, does not exist !",
        });

    const followRecord = await followModel.create({
        follower: followerUserName,
        followee: followeeUserName,
    });

    res
        .status(200)
        .json({ success: true, message: "You followed ", followRecord });
};

const getAllPendingFollowRequests = async (req, res) => {
    try {
        const foloweeUsername = req.user.username;

        // find that posts where this username is folowee :

        const allPosts = await followModel.find({
            followee: foloweeUsername,
            status: "pending",
        });

        return res.status(200).json({
            success: true,
            message: "Pending posts are fetched Success",
            allPosts,
        });
    } catch (error) {
        return res.status(404).json({ success: false, message: "Could not fetch" });
    }
};

const actionFollowRequestController = async (req, res) => {
    try {
        const followerUserName = req.params.follower;
        const foloweeUsername = req.user.username;

        if (followerUserName === foloweeUsername)
            return res.status(401).json({
                success: false,
                message: "You are not allowed to perform action on yourself",
            });

        // find the users follow request is available or not :

        const request = await followModel.findOne({
            follower: followerUserName,
            followee: foloweeUsername,
        });

        if (!request)
            return res
                .status(404)
                .json({ success: false, message: "No Request founded !" });

        if (request.status === "rejected")
            return res.status(409).json({
                success: false,
                message: "Try after sending the follow request again by follower",
            });

        if (request.status === "accepted") {
            return res.status(409).json({
                success: false,
                message: "Request already accepted",
            });
        }

        const action = req.body?.action;
        if (!action)
            return res
                .status(400)
                .json({ success: false, message: "Invalid action" });

        if (action === "accept") {
            request.status = "accepted";
            await request.save();
            return res
                .status(200)
                .json({ success: true, message: "Accepted Success" });
        } else if (action === "reject") {
            request.status = "rejected";
            await request.save();
            return res
                .status(200)
                .json({ success: true, message: "Rejected Success" });
        }

        return res.status(400).json({
            success: false,
            message: "Invalid action. Use accept or reject",
        });
    } catch (error) {
        console.log("Error in actionFollowRequestController", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

const postReactionController = async (req, res) => {
    try {
        const reactorUsername = req.user.username;
        const { postId } = req.params;
        const reaction = req.body?.reaction;

        // allowed Reaction :
        const allowedReactions = ["like", "love", "support", "sad", "wow", "funny"];
        if (!allowedReactions.includes(reaction)) {
            return res.status(400).json({
                success: false,
                message: "Invalid reaction type",
            });
        }

        // check post existence (cheap check)
        const postExists = await postModel.exists({ _id: postId });
        if (!postExists) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        // check for reaction is already present on this post :
        const existingReaction = await likeModel.findOne({
            username: reactorUsername,
            post: postId,
        });

        // remove the reaction while same reaction again comes, otherwise change the reaction type :
        if (existingReaction) {
            //delete

            if (existingReaction.reactionType === reaction) {
                await likeModel.findOneAndDelete({ _id: existingReaction._id });

                return res
                    .status(200)
                    .json({ success: true, message: "Unreact Success :" });
            }

            existingReaction.reactionType = reaction;
            await existingReaction.save();

            return res.status(200).json({ success: true, message: `reaction updated to ${reaction}` })

        }

        
        // create a new entity for first time like  :

        const newLike = likeModel.create({
            username: reactorUsername,
            post: postId,
            reactionType: reaction
        })

        return res.status(201).json({ success: true, message: `${reaction} reacted success` });
    } catch (error) {
        console.error("Reaction error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
module.exports = {
    followController,
    getAllPendingFollowRequests,
    actionFollowRequestController,
    postReactionController,
};

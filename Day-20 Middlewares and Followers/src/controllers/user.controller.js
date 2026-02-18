const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

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
        followee: followeeUserName
    });



    if (alreadyFollowed) return res.status(200).json({ success: true, message: `You are already following to ${followeeUserName}` })


    const followeeUser = await userModel.findOne({ username: followeeUserName });

    if (!followeeUser)
        return res
            .status(404)
            .json({
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

        const allPosts = await followModel.find({ followee: foloweeUsername, status: "pending" });

        return res.status(200).json({ success: true, message: "Pending posts are fetched Success", allPosts });
    } catch (error) {
        return res.status(404).json({ success: false, message: "Could not fetch" })
    }
}

module.exports = { followController, getAllPendingFollowRequests };

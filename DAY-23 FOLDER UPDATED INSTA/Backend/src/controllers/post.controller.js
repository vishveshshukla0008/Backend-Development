const postModel = require("../models/post.model");
const userModel = require("../models/user.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const likeModel = require("../models/like.model");
const jwt = require("jsonwebtoken");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
  try {
    const { caption } = req.body;
    const file = await client.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), "file"),
      fileName: "Test",
      folder: "cohort-2-insta-clone-posts",
    });

    const post = await postModel.create({
      caption,
      imageUrl: file.url,
      user: req.user._id,
    });
    return res
      .status(200)
      .json({ success: true, message: "Post created successfully !", post });
  } catch (error) {
    console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "User not authorized !" });
  }
};

const getUsersAllPostsController = async (req, res) => {
  const posts = await postModel.find({ user: req.user._id });

  return res
    .status(200)
    .json({ success: true, message: "Posts Fetched Successfully !", posts });
};

const getPostDetailsController = async (req, res) => {
  // check user login :
  const postId = req.params.postId;
  const userId = req.user._id;

  // find the post :
  const post = await postModel.findById(postId);

  if (!post)
    return res
      .status(404)
      .json({ success: false, message: "Post not found :" });

  // verify
  const isPostOwner = userId.equals(post.user.toString());

  if (!isPostOwner)
    return res
      .status(403)
      .json({ success: false, message: "Forbidden Request !" });

  return res
    .status(200)
    .json({ success: true, message: "Post fetched Successfully !", post });
};

const deletePostController = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user._id;

    const post = await postModel.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    if (!post.user.equals(userId)) {
      return res
        .status(403)
        .json({ success: false, message: "Forbidden request" });
    }

    const deletedPost = await postModel.findByIdAndDelete(postId);

    return res.status(200).json({
      success: true,
      message: "Post deleted successfully",
      deletedPost,
    });
  } catch (error) {
    console.error("Delete Post Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getFeedController = async (req, res) => {
  try {
    const user = req.user;

    const feed = await Promise.all((await postModel.find().populate("user").lean()).map(async (post) => {
      const isLiked = await likeModel.findOne({
        username: user.username,
        post: post._id
      })

      post.likedByCurrentUser = Boolean(isLiked) ? isLiked.reactionType : false;

      return post;
    }));

    return res
      .status(200)
      .json({ success: true, message: "Feed fetched success", feed });
  } catch (error) {
    console.log("error in fetching feed")
    res.status(501).json({ success: false, message: error.message })
  }
};

module.exports = {
  createPostController,
  getUsersAllPostsController,
  getPostDetailsController,
  deletePostController,
  getFeedController,
};

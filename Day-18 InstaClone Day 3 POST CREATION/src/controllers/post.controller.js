const postModel = require("../models/post.model");
const userModel = require("../models/user.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const createPostController = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res.status(401).json({ success: false, message: "Login First !" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId);

    if (!user)
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Access !" });

    const { caption } = req.body;
    const file = await client.files.upload({
      file: await toFile(Buffer.from(req.file.buffer), "file"),
      fileName: "Test",
      folder: "cohort-2-insta-clone-posts",
    });

    const post = await postModel.create({
      caption,
      imageUrl: file.url,
      user: decoded.userId,
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
  const token = req.cookies.token;

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Please login.",
    });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Forbidden Request !" });
  }

  const posts = await postModel.find({ user: decoded.userId });

  return res
    .status(200)
    .json({ success: true, message: "Posts Fetched Successfully !", posts });
};

const getPostDetailsController = async (req, res) => {
  // check user login :
  let postId = req.params.postId;
  const token = req.cookies.token;

  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized !" });

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authorized !" });
  }

  const userId = decoded.userId;

  // find the post :

  const post = await postModel.findById(postId);

  if (!post)
    return res
      .status(404)
      .json({ success: false, message: "Post not found :" });

  // verify

  const isPostOwner = userId === post.user.toString();

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
    const token = req.cookies?.token;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "You are not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { postId } = req.params;
    const userId = decoded.userId;

    const post = await postModel.findById(postId);

    if (!post) {
      return res
        .status(404)
        .json({ success: false, message: "Post not found" });
    }

    if (post.user.toString() !== userId) {
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



module.exports = {
  createPostController,
  getUsersAllPostsController,
  getPostDetailsController,
  deletePostController,
};

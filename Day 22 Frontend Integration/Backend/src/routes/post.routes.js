const postRouter = require("express").Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postController = require("../controllers/post.controller");
const { identifyUser } = require("../middlewares/auth.middleware.js");

postRouter
    .route("/")
    .post(upload.single("image"), identifyUser, postController.createPostController)
    .get(identifyUser, postController.getUsersAllPostsController);

postRouter
    .get("/:postId", identifyUser, postController.getPostDetailsController)
    .delete("/:postId", identifyUser, postController.deletePostController);

module.exports = postRouter;

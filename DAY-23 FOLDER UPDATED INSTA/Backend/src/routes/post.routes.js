const postRouter = require("express").Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const postController = require("../controllers/post.controller");
const { identifyUser } = require("../middlewares/auth.middleware.js");

postRouter
    .route("/")
    .post(
        upload.single("image"),
        identifyUser,
        postController.createPostController,
    )
    .get(identifyUser, postController.getUsersAllPostsController);

postRouter
    .route("/:postId")
    .get(identifyUser, postController.getPostDetailsController)
    .delete(identifyUser, postController.deletePostController);

/***
 * @route GET /api/posts/feed/all
 * @description Finds all the posts and add checks current user is liked or not:
 */

postRouter.get("/feed/all", identifyUser, postController.getFeedController);
module.exports = postRouter;

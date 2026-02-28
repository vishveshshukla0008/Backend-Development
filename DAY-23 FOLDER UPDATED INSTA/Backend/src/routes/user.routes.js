const userRouter = require("express").Router();
const { identifyUser } = require("../middlewares/auth.middleware.js");
const userController = require("../controllers/user.controller.js");

/***
 * @route POST /api/users/follow/:username
 * @description follower will follow a followee with a pending request !
 */

userRouter
    .route("/follow/:username")
    .post(identifyUser, userController.followController);

/***
 * @route GET /api/users/follow/pendings
 * @description Getting all pending follower requests in []
 */

userRouter
    .route("/follow/pendings")
    .get(identifyUser, userController.getAllPendingFollowRequests);

/***
 * @route POST /api/users/follow/action/:follower
 * @description perform actions on users request in this ['accepted', 'rejected'] enum in databases
 */

userRouter
    .route("/follow/action/:follower")
    .post(identifyUser, userController.actionFollowRequestController);


/***
 * @route POST /api/users/reaction/: 
 * @description perform like operation on users post and type of 'reaction' is in ['love', 'support', 'sad', 'wow', 'funny']  accept reaction in body :
 */

userRouter.post("/reaction/:postId", identifyUser, userController.postReactionController)

module.exports = userRouter;

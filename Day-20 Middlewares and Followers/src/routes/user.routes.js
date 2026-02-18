const userRouter = require("express").Router();
const { identifyUser } = require("../middlewares/auth.middleware.js");
const userController = require("../controllers/user.controller.js");

userRouter.post("/follow/:username", identifyUser, userController.followController);


userRouter.route("/follow/pendings").get(identifyUser, userController.getAllPendingFollowRequests)

module.exports = userRouter;

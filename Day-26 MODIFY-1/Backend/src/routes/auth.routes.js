const authRouter = require("express").Router();
const authController = require("../controllers/auth.controller");
const { authUser } = require("../middlewares/auth.middleware");

/***
 * @route POST /api/auth/post
 * @description regsiter api for register a user on server :
 *  */
authRouter.route("/register").post(authController.registerUserController)


/***
 * @route POST /api/auth/post
 * @description login api for login a user on server :
 */

authRouter.route("/login").post(authController.loginUserController);



/***
 * @route get /api/auth/getme
 * @description Getting the current user Details (Protected)
 */

authRouter.get("/getme", authUser, authController.getMeController)


authRouter.get("/logout", authController.logoutUser)


module.exports = authRouter;
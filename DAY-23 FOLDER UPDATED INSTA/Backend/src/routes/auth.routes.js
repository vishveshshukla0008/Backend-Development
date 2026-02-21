const authController = require("../controllers/auth.controller");
const {identifyUser} = require("../middlewares/auth.middleware");

const router = require("express").Router();


router.route("/register").post(authController.registerUserController);
router.route("/login").post(authController.loginController);
router.route("/me").get(identifyUser, authController.getMeController)


module.exports = router;
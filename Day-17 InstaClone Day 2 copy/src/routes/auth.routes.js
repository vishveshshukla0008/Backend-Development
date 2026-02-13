const authController = require("../controllers/auth.controller");

const router = require("express").Router();


router.route("/register").post(authController.registerUserController);
router.route("/login").post(authController.loginController);
router.route("/me").get(authController.getMeController)


module.exports = router;
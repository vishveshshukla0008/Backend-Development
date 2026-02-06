const { registerController, protectedController, loginController } = require("../controllers/auth.controller");

const router = require("express").Router();


router.route("/register").post(registerController);

router.route("/login").post(loginController)

router.route("/protected").post(protectedController)


module.exports = router;
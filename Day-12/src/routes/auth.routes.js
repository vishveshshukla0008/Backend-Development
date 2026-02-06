const { registerController } = require("../controllers/auth.controller");

const router = require("express").Router();


router.route("/register").post(registerController)


module.exports = router;
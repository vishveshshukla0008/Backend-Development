const { userRegisterController, userLoginController, protectedController } = require("../controllers/auth.controller.js");

const router = require("express").Router();

router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.post("/protected", protectedController);

module.exports = router;


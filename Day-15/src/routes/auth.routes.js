const { userRegisterController, userLoginController, protectedController, getMeController } = require("../controllers/auth.controller.js");

const router = require("express").Router();

router.post("/register", userRegisterController);
router.post("/login", userLoginController);
router.get("/me", getMeController);
router.post("/protected", protectedController);

module.exports = router;


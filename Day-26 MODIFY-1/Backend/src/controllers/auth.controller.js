const userModel = require("../models/user.model.js");
const AppError = require("../utils/AppError");
const asyncWrapper = require("../utils/asyncWrapper");
const bcrypt = require("bcrypt");
const blacklistModel = require("../models/blacklist.model.js");
const jwt = require("jsonwebtoken");

const registerUserController = asyncWrapper(async (req, res) => {
    let { fullname, username, email, password } = req.body;

    if (!fullname || !username || !email || !password) {
        throw new AppError("All fields are required", 400);
    }

    const normalizedEmail = email.toLowerCase().trim();
    const normalizedUsername = username.toLowerCase().trim();
    fullname = fullname.trim();

    const isUserAlreadyExists = await userModel.exists({
        $or: [
            { email: normalizedEmail },
            { username: normalizedUsername }
        ]
    });

    if (isUserAlreadyExists) {
        throw new AppError("User already exists", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create user
    let user = await userModel.create({
        fullname: fullname.trim(),
        username: normalizedUsername,
        email: normalizedEmail,
        password: hashedPassword
    });


    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    );

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3 * 24 * 60 * 60 * 1000
    });


    user = user.toObject();
    delete user.password;

    return res.status(201).json({
        success: true,
        message: "Registration successful",
        user
    });
});


const loginUserController = asyncWrapper(async (req, res) => {
    // check the required fields:
    let { username, email, password } = req.body;

    //Normalize this :
    username = username?.toLowerCase().trim();
    email = email?.toLowerCase().trim();

    // check the user is present or not :

    let user = await userModel.findOne({ $or: [{ username }, { email }] }).select("+password")

    if (!user) throw new AppError("User does not exist", 401);



    // check pass :
    const isPassMatch = await bcrypt.compare(password, user.password);

    if (!isPassMatch) throw new AppError("Invalid Credentials");

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "3d" });

    user = user.toObject();
    delete user.password;

    res.cookie("token", token);

    return res.status(200).json({ success: true, message: "Logged In", user })
})

const getMeController = asyncWrapper(async (req, res) => {
    const userId = req.user._id;

    const user = await userModel.findById(userId);

    return res.status(200).json({ success: true, message: "User fetched Succesfully", user });
})

const logoutUser = asyncWrapper(async (req, res) => {
    const token = req.cookies.token;

    if (!token) throw new AppError("Login First for logout", 400);

    res.clearCookie("token");

    await blacklistModel.create({
        token
    })

    return res.status(200).json({
        success: true,
        message: "logout successfully."
    })

})

module.exports = { registerUserController, loginUserController, getMeController, logoutUser }

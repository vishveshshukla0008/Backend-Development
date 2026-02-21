const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")

const registerUserController = async (req, res) => {
    try {
        const { fullName, username, email, password, profileImage, bio } = req.body;


        const user = await userModel.findOne({ $or: [{ username }, { email }] });

        if (user) return res.status(400).json({ message: "User already exists with this " + (user.email === email ? "email !" : "username !") });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            fullName,
            username,
            email,
            password: hashedPassword,
            profileImage,
            bio,
        });

        const userObj = newUser.toObject();
        delete userObj.password;

        // Generate a token :
        const token = jwt.sign({ userId: newUser._id, username: newUser.username }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.cookie("token", token, { httpOnly: true });

        return res.status(201).json({
            success: true,
            message: "User registered successfully !",
            user: userObj,
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
};


const loginController = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        const query = email ? { email } : { username };

        const user = await userModel.findOne(query).select("+password");

        if (!user) return res.status(404).json({ success: false, message: "User does not exist :" });


        const matchPassword = await bcrypt.compare(password, user.password)

        if (!matchPassword) return res.status(401).json({ success: false, message: "Invalid Credentials :" });


        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

        res.cookie("token", token);

        const userObj = user.toObject();
        delete userObj.password;

        return res.status(200).json({ success: true, message: "Logged In", user: userObj })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getMeController = async (req, res) => {

    let user = await userModel.findById(req.user._id);

    if (!user) return res.status(401).json({ success: false, message: "Unauthorized" });

    return res.status(201).json({ success: true, message: "Your details", user })
}
module.exports = { registerUserController, loginController, getMeController };
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
    try {
        let { email, username, password } = req.body;

        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(409).json({
                success: false,
                message: "User already registered with this email"
            });
        }

        let user = await userModel.create({ email, username, password });


        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
        );

        res.cookie("token", token);
        res.status(200).json({
            success: true,
            message: "User registered successfully", token
        });
    } catch (err) {
        console.log("Error in registration:", err.message);
        return res.status(400).json({
            success: false,
            message: err.message,
        });
    }
};

const protectedController = async (req, res) => {
    console.log(req.cookies)
    res.send("Yes Hello")
}


const loginController = async (req, res) => {
    try {
        let { email, password } = req.body;

        // find the user here :

        let user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, message: "User does not exist" });
        }

        const isPasswordMatched = user.password === password;

        if (!isPasswordMatched) {
            return res.status(401).json({ success: false, message: "Invalid Password" });
        }

        const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET);

        res.cookie("token", token);

        return res.status(200).json({ success: true, message: "Logged In", user, token });
    } catch (error) {
        console.log("Login error");
        res.status(400).json({ success: false, message: "loggedin error" })
    } 3
}

module.exports = { registerController, protectedController, loginController };

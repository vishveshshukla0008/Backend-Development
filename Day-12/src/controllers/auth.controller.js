const userModel = require("../models/user.model");

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

        await userModel.create({ email, username, password });

        res.status(200).json({
            success: true,
            message: "User registered successfully"
        });
    } catch (err) {
        console.log("Error in registration:", err.message);
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
};

module.exports = { registerController };

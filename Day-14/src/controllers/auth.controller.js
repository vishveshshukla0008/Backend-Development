const userModel = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const userRegisterController = async (req, res) => {
    const { email, password, username } = req.body;

    // check for duplicate user :

    const user = await userModel.findOne({ email });

    if (user) return res.status(409).json({ success: false, message: "User already exists !" });

    // hash the password before creating user ;

    const hash = crypto.createHash("md5").update(password).digest("hex");

    // create a new User :

    const newUser = await userModel.create({
        email, password: hash, username
    });


    //generate a token and set in cookie :
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token);

    return res.status(201).json({ success: true, message: "Registration Success", token });
}

const protectedController = async (req, res) => {
    const token = req.cookies.token;

    if (!token) return res.status(400).json({ success: false, message: "Could not access" })


    res.status(200).json({ success: true, })

}

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    // check for user is registered or not 

    let user = await userModel.findOne({ email });

    if (!user) return res.status(401).json({ success: false, message: "User Does not exist :" });

    // if user is registered now validate the password :
    // first change the coming password in hash and then compare to stored hashed

    const hash = crypto.createHash("md5").update(password).digest("hex");

    const checkPass = user.password === hash;

    if (!checkPass) return res.status(401).json({ success: false, message: "Invalid credentials :" });


    // ALl set then login the user and providing a token :

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    res.cookie("token", token);

    return res.status(200).json({ success: true, message: "Logged IN", token })
}


module.exports = { userRegisterController, userLoginController, protectedController };
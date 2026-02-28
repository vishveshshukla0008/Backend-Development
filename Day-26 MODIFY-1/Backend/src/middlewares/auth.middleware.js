const asyncWrapper = require("../utils/asyncWrapper");
const AppError = require("../utils/AppError");
const userModel = require("../models/user.model");
const blacklistModel = require("../models/blacklist.model");
const jwt = require("jsonwebtoken");




const authUser = asyncWrapper(async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) throw new AppError("Unauthorized", 400);


    // find the user based on token:

    const userDetails = jwt.verify(token, process.env.JWT_SECRET);
    const isTokenBlacklisted = await blacklistModel.findOne({
        token
    })

    if (isTokenBlacklisted) throw new AppError("Please login again !", 401);


    const user = await userModel.findById(userDetails.userId);

    if (!user) throw new AppError("Invalid user", 401);

    req.user = user;
    next();
})


module.exports = { authUser }
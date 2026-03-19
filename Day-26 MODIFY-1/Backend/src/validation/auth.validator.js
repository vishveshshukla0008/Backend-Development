const expressValidator = require("express-validator");

const { body } = expressValidator;




const validate = (req, res, next) => {
    const errors = expressValidator.validationResult(req);

    if (errors.isEmpty()) {
        return next();
    }

    res.status(400).json({
        errors: errors.array()
    })
}


const registerValidation = [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password").isLength({ min: 6 }).custom((value) => {
        if (value.length < 6) {
            throw new Error("password must be at least 6 characters long");
        }


        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/
        if (!passwordRegex.test(value)) {
            throw new Error("password must contain at least one uppercase letter and one number");
        }

        return true;
    }),
    body("username").isLength({ min: 3 }).matches(/^[a-zA-Z0-9]+$/).withMessage("Username must be at least 3 characters long and contain only letters and numbers"),
    body("fullname").isLength({ min: 3 }).withMessage("Fullname must be at least 3 characters long"),
    validate
]

module.exports = {registerValidation};
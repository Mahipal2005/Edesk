const validationMiddleware = (req, res, next) => {
    let email = req.body.email;
    if (email.endsWith("@gmail.com")) {
        next();
    } else {
        res.send("Invalid email");
    }
};
module.exports = validationMiddleware;

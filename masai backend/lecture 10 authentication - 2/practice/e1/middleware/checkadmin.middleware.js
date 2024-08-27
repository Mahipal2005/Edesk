const checkadmin = (req, res, next) => {
    if (req.user.role === "admin") {
        next();
    } else {
        res.status(401).send("You are not authorized to access this resource");
    }
};  

module.exports = checkadmin
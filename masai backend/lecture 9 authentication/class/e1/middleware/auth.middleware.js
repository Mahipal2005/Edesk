const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.query.token;  // Query parameter से टोकन प्राप्त करना
    console.log("Token received:", token);
    
    if (!token) {
        return res.status(401).send("Token is missing, please login first");
    }

    jwt.verify(token, 'masai', function(err, decoded) {  
        if (err) {
            return res.status(401).send("Invalid token, please login first");
        }

        console.log("Decoded data:", decoded);
        req.user = decoded;  
        next(); 
    });
};

module.exports = auth;
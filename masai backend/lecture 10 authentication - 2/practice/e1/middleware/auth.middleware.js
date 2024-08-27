const jwt=require('jsonwebtoken');
const BlackListToken = require('../blacklist');

const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1];
    if(!token){
        return res.status(401).send("Access Denied ");
    }
    if(BlackListToken.includes(token)){
        return res.status(401).send("Invalid Token  , please login first");
    }
    console.log(BlackListToken)
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(401).send("Invalid Token  , please login first");
        }
        req.user=decoded;
        next();
    })
}

module.exports=auth
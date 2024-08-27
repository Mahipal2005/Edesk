const jwt=require('jsonwebtoken');

const auth=(req,res,next)=>{
    const token=req.query.token;

    if(!token){
        return res.status(401).send("Access Denied , please login first");
    }
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(401).send("Invalid Token  , please login first");
        }
        req.user=decoded;
        next();
    })
}

module.exports=auth
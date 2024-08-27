// i don't know why use req.user.role 
const checkAdmin=(req,res,next)=>{
    if(req.user.role=="admin"){
        next();
    }else{
        res.send("you are not authorized")
    }
}

module.exports=checkAdmin;
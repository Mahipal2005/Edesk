const express = require("express");
const userRoutes = express.Router();


userRoutes.post("/signup",(req,res)=>{
    res.send("signup sucessful");
});
userRoutes.post("/login",(req,res)=>{  
    res.send("login sucessful");
});

module.exports=userRoutes
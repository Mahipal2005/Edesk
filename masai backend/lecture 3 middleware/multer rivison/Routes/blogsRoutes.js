const express = require("express");
const blogsRoutes = express.Router();

blogsRoutes.get("/blogs",(req,res)=>{
    res.send("There are blogs ");
});
blogsRoutes.post("/addblogs",(req,res)=>{
    res.send("blogs added");
});
blogsRoutes.put("/blogs/:id",(req,res)=>{
    res.send("blogs updated");
});
blogsRoutes.put("/blogs/:id",(req,res)=>{
    res.send("blogs deleted");
});

module.exports = blogsRoutes;
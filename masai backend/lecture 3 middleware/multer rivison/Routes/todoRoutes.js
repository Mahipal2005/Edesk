const express = require("express");
const todoRoutes = express.Router();

todoRoutes.get("/todos",(req,res)=>{
    res.send("There are todos ");
});
todoRoutes.post("/addtodo",(req,res)=>{
    res.send("todo added");
});
todoRoutes.put("/todo/:id",(req,res)=>{
    res.send("todo updated");
});
todoRoutes.put("/todo/:id",(req,res)=>{
    res.send("todo deleted");
});

module.exports = todoRoutes;
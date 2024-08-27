const express = require('express');
const UserModel = require('../model/user.model');
const userRoute = express.Router();
const jwt= require('jsonwebtoken');

userRoute.post('/register', async(req, res) => {
    try {
        const data = new UserModel(req.body);
        const user = await data.save();
        res.status(201).json({
            msg: "User created successfully",
            data: user});

    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});

userRoute.post('/login', async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email, password});
        if(!user) {
            res.status(400).json({msg: "Please register first"});
        } else {
            var token = jwt.sign({ name:user.name,role:user.role }, 'masai');
            res.status(200).json({msg: "User logged in successfully",
                token
            });
        }
        
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
});

module.exports = userRoute;
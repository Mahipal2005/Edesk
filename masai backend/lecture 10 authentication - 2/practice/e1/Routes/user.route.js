const express = require("express");
const UserRoute = express.Router();
const mongoose = require("mongoose");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

UserRoute.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Use await to handle asynchronous operation
        let user = await User.findOne({ email });
        if (!user) {
        bcrypt.hash(password, 10, function(err, hash) {
            if (err) {
                return res.status(500).send("Server Error: " + err.message);
            }
            user = new User({
                name,
                email,
                password: hash
            });
            user.save();
            res.status(200).json({message: 'Successfully registered'});
        });
        } else {
            res.status(400).send("User already exists");
        }
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
});

UserRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        
        // Use await to handle asynchronous operation
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send("User does not exist");
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                mana crash course ma front end select keya h mujha react ma doubt h to please mujha react vala crash course ma enroll krao            const token = jwt.sign({name:user.name,email:user.email,role:user.role},process.env.SECRET_KEY);
            res.status(200).json({message: 'Successfully logged in',
            token: token
            });
            }
            else{
                res.status(400).send("Invalid credentials");
            }
           
        });
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
});

module.exports = UserRoute;

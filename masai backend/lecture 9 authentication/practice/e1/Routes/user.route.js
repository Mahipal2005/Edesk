const express = require("express");
const UserRoute = express.Router();
const mongoose = require("mongoose");
const User = require("../model/user.model");
const jwt = require("jsonwebtoken");

UserRoute.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Use await to handle asynchronous operation
        let user = await User.findOne({ email });
        
        if (!user) {
            user = new User({ name, email, password });
            await user.save(); // Save the new user to the database
            res.status(201).json({message: 'Successfully registered',
            user: user
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
        let user = await User.findOne({ email, password });
        if (!user) {
            res.status(400).send("User does not exist");
        } else {
            const token = jwt.sign({name:user.name,email:user.email},process.env.SECRET_KEY);
            res.status(200).json({message: 'Successfully logged in',
            token: token
            });
        }
    } catch (error) {
        res.status(500).send("Server Error: " + error.message);
    }
});

module.exports = UserRoute;

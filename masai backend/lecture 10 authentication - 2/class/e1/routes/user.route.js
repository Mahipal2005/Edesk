const express = require("express");
const UserModel = require("../model/user.model");
const userRoute = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

userRoute.post("/register", async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    let user;
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        console.log(err);
        res.status(400).json({ msg: err.message });
      }
      user = new UserModel({
        name,
        email,
        password: hash,
        age,
      });
      await user.save();
      console.log(user);
      res.status(200).json({ msg: "User registered successfully" });
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});
userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await UserModel.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ msg: "User not found" });
      }
  
      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ email: user.email, name: user.name }, "masai");
          return res.status(200).json({ msg: "User logged in successfully", token });
        } else {
          return res.status(400).json({ msg: "Wrong password" });
        }
      });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  });
  
  module.exports = userRoute;
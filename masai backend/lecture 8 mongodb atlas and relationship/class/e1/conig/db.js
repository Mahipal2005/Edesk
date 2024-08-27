const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// const url = "mongodb+srv://Mahipal123:Mahipal123@cluster0.yahab6p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //(last ma database ka name h in use mongodb)
const url=process.env.MONGO_URL
const connection =  mongoose.connect(url);



const express = require('express');
const mongoose= require('mongoose');
const Movie = require('./model/movies.model');
const allRoutes = require('./Routes/get.Route');
const url="mongodb://localhost:27017/MovieStore";
const port = 3000;
const app = express();
app.use('/movies',allRoutes);


app.listen(port,async()=>{
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
    console.log(`server is running on port ${port}`)
});
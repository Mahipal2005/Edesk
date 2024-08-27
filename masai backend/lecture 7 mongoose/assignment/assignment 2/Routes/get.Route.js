const express = require("express");
const Movie = require("../model/movies.model");
const allRoutes = express.Router();
allRoutes.use(express.json());
allRoutes.get("/filterBytitle", async (req, res) => {
  try {
    const title = req.query.title;
    const movies = await Movie.find({ title: { $regex: title } });
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).json({ "status": "failed",message: error.message });
  }
});

allRoutes.get("/filterByrate", async (req, res) => {
  try {
    let Rating = req.query.rating;
    Rating = Number(Rating);
    const movies = await Movie.find({ rating: Rating });
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).json({ "status": "failed",message: error.message });
  }
});

allRoutes.get("/movies", async (req, res) => {
 try {
  const movies = req.query.q;
  const movie = await Movie.find({ name: { $regex: movies } });
  res.status(200).send(movie);
 } catch (error) {
  res.status(400).json({ "status": "failed",message: error.message });
 }
});

allRoutes.get("/MoviesSort", async (req, res) => {
  try {
    const sortBy = req.query.sortBy;
    const movies = await Movie.find().sort({ [sortBy]: 1 });
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).json({ "status": "failed",message: error.message });
  }
});
// Pagination: Implement pagination to limit the number of movies returned per request. Use page and limit query parameters to define the pagination.
allRoutes.get("/pagination", async (req, res) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const movies = await Movie.find().skip((page - 1) * limit).limit(limit);
    res.status(200).send(movies);
  } catch (error) {
    res.status(400).json({ "status": "failed",message: error.message });
  }
})


allRoutes.post('/AddMovies', async (req, res) => {
   try {
    const movie=new Movie(req.body);
    await movie.save();
    console.log(req.body);
    res.status(201).json({message:"movie added successfully",date:movie});
   } catch (error) {
    res.status(400).json({message: error.message});
   }
})

allRoutes.put('/updateMovies/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const movie = req.body;
    await Movie.findByIdAndUpdate({ _id: id }, movie);
    res.status(200).json({message:"movie updated successfully"});
  } catch (error) { 
    res.status(400).json({message: error.message});
  }
})

allRoutes.delete('/deleteMovies/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Movie.findByIdAndDelete({ _id: id });
    res.status(200).json({message:"movie deleted successfully"});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
})


module.exports = allRoutes;

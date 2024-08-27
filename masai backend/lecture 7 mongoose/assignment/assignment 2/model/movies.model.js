const mongoose= require('mongoose');

const movieSchema = new mongoose.Schema(
  {
    title: String,
    rating: Number,
    name: String,
    description: String,
  },
  { versionKey: false }
);
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
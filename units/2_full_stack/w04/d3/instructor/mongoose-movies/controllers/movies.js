const Movie = require('../models/movie');

const newMovie = (req, res) => {
  res.render('movies/new');
}

const create = (req, res) => {
  console.log('Creating a new movie!!');
}

module.exports = {
  create,
  new: newMovie
}

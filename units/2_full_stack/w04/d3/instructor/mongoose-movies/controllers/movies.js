const Movie = require('../models/movie');

const newMovie = (req, res) => {
  res.render('movies/new');
}

module.exports = {
  new: newMovie
}

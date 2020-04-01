const Movie = require('../models/movie');

const newMovie = (req, res) => {
  res.render('movies/new');
}

const create = (req, res) => {

  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
  // remove empty properties
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  const movie = new Movie(req.body);
  movie.save(function(err) {
    // one way to handle errors
    if (err)
      return res.render('movies/new');
    else {
      console.log(movie);
      res.redirect('/movies');
    }
  });
  
}

const index = (req, res) => {
  res.render('movies/index');
}

module.exports = {
  index,
  create,
  new: newMovie
}

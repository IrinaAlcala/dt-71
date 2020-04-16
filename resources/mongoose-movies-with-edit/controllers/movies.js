const Movie = require("../models/movie");

module.exports = {
  index,
  show,
  new: newMovie,
  create,
  edit,
  update,
};

// INDEX..aka SHOW ALL
function index(req, res) {
  Movie.find({}, function (err, movies) {
    res.render("movies/index", { title: "All Movies", movies });
  });
}

// SHOW
function show(req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    res.render("movies/show", { title: "Movie Detail", movie });
  });
}

// NEW
function newMovie(req, res) {
  res.render("movies/new", { title: "Add Movie" });
}

// CREATE
function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ",");
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(",");
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  const movie = new Movie(req.body);
  movie.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect("/movies/new");
    console.log(movie);
    // for now, redirect right back to new.ejs
    res.redirect("/movies");
  });
}

// EDIT
// /movies/5e5a93cd12675b4c0efcb17e/edit
function edit(req, res) {
  Movie.findById(req.params.id, (err, movie) => {
    console.log("Found Movie:", movie);
    res.render("./movies/edit.ejs", {
      title: "Edit Movie",
      movie: movie,
    });
  });
}

// PUT/UPDATE
function update(req, res) {
  Movie.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, movie) => {
      // Redirect to movie show page:
      res.redirect(`/movies/${movie._id}`);
    }
  );
}

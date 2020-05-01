require('./config/database');
const Movie = require('./models/movie');
const Performer = require('./models/performer');
const data = require('./data');
const mPromise = Movie.deleteMany({});
const pPromise = Performer.deleteMany({});
Promise.all([mPromise, pPromise]).then( () => {
  console.log('Everything Deleted!');
  return Promise.all([
    Performer.create(data.performers), 
    Movie.create(data.movies)
  ]);
}).then( (result) => {
  console.log('Movies and Performers are created!');
  return Promise.all([
    Performer.findOne({ name: 'Mark Hamill' }),
    Movie.findOne({ title: 'Star Wars - A New Hope' })
  ]);
}).then( (result) => {
  mark = result[0];
  sw = result[1];
  sw.cast.push(mark);
  return sw.save();
}).then( () => {
  process.exit();
});
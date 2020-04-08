const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost/puppies',
  { useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true }
);

// Load express
const express = require('express');

// create an instance of an express app
const app = express();

 // Define a "root" route directly on app
 // Tomorrow, we'll use best practice routing
 app.get('/', (req, res) => {
     res.send('<h1>Hello SEI!</h1>');
 });

  // Tell the app to listen on port 3000
 // for HTTP requests from clients
 app.listen(3000, () => {
     console.log('Listening on port 3000!');
 })
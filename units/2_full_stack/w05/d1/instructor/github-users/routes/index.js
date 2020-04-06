const express = require('express');
const router = express.Router();
const request = require('request');

const rootURL = 'https://api.github.com';
const accessToken = "171061b9b15ed55d552303ba2a4b8ff25e4740ad" // BAD!!!

/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.query.username;

  const options = {
    url: `${rootURL}/users/${username}`,
    headers: { 
      'User-Agent': 'fredngo',
      Authorization: `token ${accessToken}`
    }
  };
  
  request(
    options,
    (err, response, body) => {
      console.log(body);
      res.render('index');
    }
  );

});

module.exports = router;

// when processing POST requests, use req.params
// when processing GET requests, use req.query
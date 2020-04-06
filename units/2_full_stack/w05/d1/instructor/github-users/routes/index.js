const express = require('express');
const router = express.Router();
const request = require('request');

const rootURL = 'https://api.github.com';
const accessToken = "xxx" // BAD!!!

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
      const userData = JSON.parse(body);
      options.url = userData.repos_url;

      // Make another request
      request(
        options,
        (err, response, body) => {
          userData.repos = JSON.parse(body);
          res.render('index', { userData });
        }
      );
    }
  );

});

module.exports = router;

// when processing POST requests, use req.params
// when processing GET requests, use req.query
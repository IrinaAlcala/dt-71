const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  const username = req.query.username;
  console.log(`username: ${username}`);

  res.render('index', { title: 'Express' });
});

module.exports = router;

// when processing POST requests, use req.params
// when processing GET requests, use req.query
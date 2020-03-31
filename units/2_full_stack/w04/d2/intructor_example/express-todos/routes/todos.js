var express = require('express');
var router = express.Router();

const Todo = require('../models/todo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('todos/index', { todos: Todo.getAll() });
});

module.exports = router;

const Todo = require('../models/todo');

const index = (req, res, next) => {
  res.render('todos/index', { todos: Todo.getAll() });
}

module.exports = {
  index
}

const Todo = require('../models/todo');

const index = (req, res, next) => {
  res.render('todos/index', { todos: Todo.getAll() });
}

const show = (req, res) => {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id)

  });
}

module.exports = {
  index,
  show
}

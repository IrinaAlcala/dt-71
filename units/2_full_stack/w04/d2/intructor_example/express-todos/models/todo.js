const todos = [
  { todo: 'Feed Dogs', done: true },
  { todo: 'Learn Express', done: false },
  { todo: 'Buy Milk', done: false }
];

const getAll = () => {
  return todos;
}

const getOne = (id) => {
  return todos[id];
}

module.exports = {
  getAll,
  getOne
};

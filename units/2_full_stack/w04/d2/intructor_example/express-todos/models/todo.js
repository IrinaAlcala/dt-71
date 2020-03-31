const todos = [
  { todo: 'Feed Dogs', done: true },
  { todo: 'Learn Express', done: false },
  { todo: 'Buy Milk', done: false }
];

const getAll = () => {
  return todos;
}

module.exports = {
  getAll
};

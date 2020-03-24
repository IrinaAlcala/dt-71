const lookup = {
    '1': 'red',
    '-1': 'blue',
    'null': 'white',
};

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

let board, turn, winner

let squares = document.querySelectorAll('td div');
let message = document.querySelector('h1');

document.querySelector('table').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', initialize)

initialize();

function handleMove(evt) {
    let idx = parseInt(evt.target.id.replace('sq', ''));
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render(); 
}

function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
      if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3) return board[winningCombos[i][0]];
    };
    if (board.includes(null)) return null;
    return 'T';
  }; 

function render() {
    board.forEach(function(sq, idx) {
      squares[idx].style.background = lookup[sq];
    });
    if (winner === 'T') {
      message.innerHTML = 'Rats, another tie!';
    } else if (winner) {
      message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}!`;
    } else {
      message.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
    }
  }


function initialize() {
    board = [null, null, null, null, null, null, null, null, null];
    turn = 1; 
    winner = null; 
    render();
}
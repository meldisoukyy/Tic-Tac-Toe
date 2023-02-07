import React, { useState } from 'react';
import Board from './Board';

const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('Start of the Game!');

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        return board[x];
      }
    }
    return null;
  }


  const handleClickedCell = (idx) => {
    // If the cell has already a value, then do nothing.
    if (board[idx]) return;

    let newBoard = board.slice();
    if (xIsNext) {
      newBoard[idx] = 'X';
    } else {
      newBoard[idx] = 'O';
    }
    setXIsNext(!xIsNext);
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setStatus('Winner is: ' + winner);
    } else {
      setStatus('Next Player is:' + (xIsNext? 'X':'O'));
    }
  }


  return (
    <div>
      <h1>{status}</h1>
      <Board board={board} cellClicked={handleClickedCell} />
    </div>
  );
}

export default TicTacToe;
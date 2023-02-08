import React, { useState } from 'react';
import Board from './Board';
import Status from './Status';

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
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [fullBoard, setFullBoard] = useState(false);

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        return board[x];
      }
    }
    return null;
  }

  const checkFullBoard = (board) => {
    return (board.every(element => element !== null));
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
    setWinner(checkWinner(newBoard));
    setFullBoard(checkFullBoard(newBoard));
  }


  return (
    <div>
      <Status nextPlayer={(xIsNext? 'X' : 'O')} winner={winner} isFull={fullBoard} />
      <Board board={board} cellClicked={handleClickedCell} />
    </div>
  );
}

export default TicTacToe;
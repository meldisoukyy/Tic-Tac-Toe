import React, { useState } from 'react';
import './TicTacToe.css';
import Board from './Board';
import Status from './Status';
import Reset from './Reset';

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
  const [winIndices, setWinIndices] = useState(Array(3).fill(null));
  const [fullBoard, setFullBoard] = useState(false);

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        setWinIndices([x, y, z]);
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
    if (board[idx] || winner) return;

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

  const handleResetButton = () => {
    let newBoard = board.slice();
    let newWinningIndices = winIndices.slice();
  
    setBoard(newBoard.map(element => element = null));
    setXIsNext(true);
    setWinner(null);
    setWinIndices(newWinningIndices.map(element => element = null));
    setFullBoard(false);
  }

  return (
    <div className='tictactoe'>
      <Status nextPlayer={(xIsNext? 'X' : 'O')} winner={winner} isFull={fullBoard} />
      <Board board={board} cellClicked={handleClickedCell} isGameEnded={winner || fullBoard} winIndices={winIndices}/>
      <Reset buttonClicked={handleResetButton} />
    </div>
  );
}

export default TicTacToe;
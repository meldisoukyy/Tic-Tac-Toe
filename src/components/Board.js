import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board({ board }) {
  let cells = [];
  board.forEach(element => {
    cells.push(<Cell value={element} />);
  });

  return (
    <div className='Board'>
      {cells}
    </div>
  );
}

export default Board;
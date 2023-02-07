import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board({ board }) {
  let cells = [];
  board.forEach((element, idx) => {
    cells.push(<Cell key={'cell ' + idx.toString()} value={element} />);
  });

  return (
    <div className='Board'>
      {cells}
    </div>
  );
}

export default Board;
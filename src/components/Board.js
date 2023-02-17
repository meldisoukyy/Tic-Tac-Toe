import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board({ board, cellClicked, isGameEnded, winIndices }) {
  let cells = [];
  board.forEach((element, idx) => {
    cells.push(
      <Cell
        key={'cell ' + idx.toString()}
        value={element}
        onClick={() => cellClicked(idx)}
        disactive={isGameEnded && (winIndices.find(element => element === idx) === undefined)}
        cursorDisactive={isGameEnded}
      />);
  });

  return (
    <div className='Board'>
      {cells}
    </div>
  );
}

export default Board;
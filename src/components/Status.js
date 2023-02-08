import React from 'react';
import './Status.css';

export default function Status({ nextPlayer, winner, isFull }) {
  let xAttr, oAttr, xStatus, oStatus;
  if (nextPlayer === 'X' && !winner) {
    xAttr = 'x-turn';
    oAttr = null;
  } else if (nextPlayer === 'O' && !winner) {
    oAttr = 'o-turn';
    xAttr = null;
  }

  if (winner === 'X') {
    xAttr = 'winner';
  } else if (winner === 'O') {
    oAttr = 'winner';
  }

  xStatus = (winner === 'X') ? 'WINNER' : (winner === 'O' ? 'LOSER' : 'X');
  oStatus = (winner === 'O') ? 'WINNER' : (winner === 'X' ? 'LOSER' : 'O');

  if (isFull) {
    xStatus = 'TIE';
    oStatus = 'TIE';
    xAttr = 'winner';
    oAttr = 'winner';
  }

  return (
    <div className='status'>
      <div
        key="div 0"
        className={'x-side ' + xAttr}
      >
        {xStatus}
      </div>
      <div
        key="div 1"
        className={'o-side ' + oAttr}
      >
        {oStatus}
      </div>
    </div>
  );
}
import React from 'react';
import './Status.css';

export default function Status({ nextPlayer, winner }) {
  let xAttr, oAttr;
  if (nextPlayer === 'X' && !winner) {
    xAttr = 'x-turn';
    oAttr = null;
  } else if (nextPlayer === 'O' && !winner) {
    oAttr = 'o-turn';
    xAttr = null;
  }

  if (winner === 'X') {
    xAttr = 'winner';
  } else if (winner === 'O'){
    oAttr = 'winner';
  }

  return (
    <div className='status'>
      <div key="div 0" className={'x-side ' + xAttr}>{(winner === 'X')? 'X - Win' : (winner === 'O'? ':(' : 'X')}</div>
      <div key="div 1" className={'o-side ' + oAttr}>{(winner === 'O')? 'O - Win' : (winner === 'X'? ':(' : 'O')}</div>


    </div>
  );
}
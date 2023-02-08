import React from 'react';
import './Cell.css'

function Cell({ value, onClick, disactive, cursorDisactive }) {
  let style = (value === 'X' ? 'cell x' : 'cell o');

  return (
    <button
      className={style + (disactive ? ' disactive' : '') + (cursorDisactive ? ' cursorDisactive' : '')}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Cell;
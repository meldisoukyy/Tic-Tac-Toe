import React from 'react';
import './Cell.css'

function Cell({ value, onClick }) {
  const style = value === 'X' ? 'cell x' : 'cell o'
  return (
    <button
      className={style}
      onClick={onClick}
    >{value}</button>
  );
}

export default Cell;
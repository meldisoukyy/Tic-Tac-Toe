import React from 'react';
import './Reset.css';

export default function Reset({ buttonClicked }) {
  return (
    <button
      onClick={buttonClicked}
      className='reset'
    >
      Reset Game
    </button>
  );
}
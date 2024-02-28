import React, { useState } from 'react';
import Game from './Game.jsx';

function Main() {

  const [start, setStart] = useState(false);

  function handleClick() {
    setStart(true);
  }

  return (
    <>
      {start ? <Game /> : null}
      <button className='startbutton' onClick={handleClick} style={{ display: start ? 'none' : 'inline' }}>START GAME</button>
    </>
  );
}

export default Main;

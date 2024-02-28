import React from 'react'
import "./Gamecard.css"
import Flipcard from './Flipcard'

function Game() {
  return (
    <>
    <div id="parent">
<div className="card">
    <Flipcard/>
    <Flipcard/>
    <Flipcard/>
    <Flipcard/>

</div>
<div className="card">
    <Flipcard/>
    <Flipcard/>
    <Flipcard/>
    <Flipcard/>

</div>
<div className="card">
    <Flipcard/>
    <Flipcard/>
    <Flipcard/>
    <Flipcard/>

</div>



    </div>
      
    </>
  )
}

export default Game

import React, { useState } from "react";
import './App.css';



function App(props) {
  const[n,m]=useState(function ran() {
    return Math.floor(Math.random() * 100);
  });

  function clickHandler(e)
  {
    m(Math.floor(Math.random() * 100));
  }

  function clk(e)
  {
    m(0);
  }

  return (
    <div style={{margin:'auto', width: 100, display: 'block'}}>
      <h1> {n} </h1>
      
      <p id='b1'>
        <button onClick={clickHandler}> Calculate Luck</button>
      </p>

      <p id='b2'>
        <button onClick={clk}>Clear Screen</button>
      </p>
  
      </div>

  );
}


export default App;

import React, { useState } from "react";
import './index.css';

function Counter() {
  const [counterState, setCounterState] = useState(0);

  function handleIncrement() {
    setCounterState(counterState + 1);
  }

  function handleDecrement() {
    setCounterState(counterState - 1);
  }

  return (
    <div className="card">
      <div className="counter-wrapper">
        <h1>{counterState}</h1>
        <button className="counter-btn1" onClick={handleIncrement}>
          +1
        </button>
        <button className="counter-btn2" onClick={handleDecrement}>
          -1
        </button>
      </div>
    </div>
  );
}

export default Counter;

import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement } from "./CounterSlice";
import "./counter.css"; // Import the same CSS file

export function Counter() {
  // Get state from Redux store
  const count = useSelector((state) => state.counter.value);

  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div className="counter-display">
      <div className="counter-buttons">{count}</div>
      <div className="flex gap-4">
        <button
          className="counter-btn btn-decrement"
          onClick={() => dispatch(decrement())}
          disabled={count === 0}
        >
          -
        </button>
        <button
          className="counter-btn btn-increment"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;

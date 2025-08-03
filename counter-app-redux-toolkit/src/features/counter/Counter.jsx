import { useSelector, useDispatch } from 'react-redux';
import { selectCount, increment, decrement, reset } from './CounterSlice';

import './counter.css'; // Import the CSS file


export default function Counter() {
  const count = useSelector(selectCount);
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
          className="counter-btn btn-reset"
          onClick={() => dispatch(reset())}
        >
          Reset
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
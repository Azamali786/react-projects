import Counter from './Counter';
import './counter.css'; // Import the same CSS file

export default function CounterCard() {
  return (
    <div className="counter-container">
      <div className="counter-card">
        <h2 className="counter-title">
          Redux Counter App
        </h2>
        <Counter />
      </div>
    </div>
  );
}
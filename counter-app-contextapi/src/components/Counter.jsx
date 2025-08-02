import { useCounter } from '../context/CounterContext';


const Counter = () => {
  const { counter, increment, decrement } = useCounter();

  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <div className="text-9xl font-bold text-gray-800 mb-12">
        {counter}
      </div>
      
      <div className="flex gap-8">
        <button
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full text-3xl font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300 shadow-md"
          onClick={increment}
          aria-label="Increment"
        >
          +
        </button>
        <button
          className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white w-16 h-16 rounded-full text-3xl font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300 shadow-md"
          onClick={decrement}
          aria-label="Decrement"
          disabled={counter === 0}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
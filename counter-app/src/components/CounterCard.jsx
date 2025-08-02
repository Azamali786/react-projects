import React from "react";
import Counter  from "./Counter";

const CounterCard = ({ counter, setCounter }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-amber-200 w-[400px] h-[500px] rounded-3xl shadow-lg flex flex-col items-center p-8">
        <h2 className="text-2xl font-bold text-gray-800 my-6">
          Counter Card: {counter}
        </h2>
        
        <Counter counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
}

export default CounterCard;
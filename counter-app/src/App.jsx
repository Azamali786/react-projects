import "./App.css";
import CounterCard from "./components/CounterCard";

import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterCard counter={counter} setCounter={setCounter} />
  );
}

export default App;

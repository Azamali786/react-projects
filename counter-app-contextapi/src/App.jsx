import "./App.css";
import { CounterContextProvider } from "./context/CounterContext";
import CounterCard from "./components/CounterCard";

function App() {
  return (
      <CounterContextProvider>
        <CounterCard />
      </ CounterContextProvider>
  );
}

export default App;

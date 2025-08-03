import "./App.css";
import ReduxProvider from "./app/ReduxProvider";
import CounterCard from "./features/counter/CounterCard";

function App() {
  return (
    <>
      <ReduxProvider>
        <CounterCard />
      </ReduxProvider>
    </>
  );
}

export default App;

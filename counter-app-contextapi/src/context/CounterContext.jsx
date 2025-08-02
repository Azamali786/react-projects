import { createContext, useContext, useState, useEffect, useCallback } from 'react';

// Create context with default values
const CounterContext = createContext({
  counter: 0,
  increment: () => {},
  decrement: () => {}
});

// Custom provider component
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem("counter");
      return savedValue ? parseInt(savedValue, 10) : 0;
    }
    return 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter])   // dependency array

  const increment = useCallback(() => {
    setCounter(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCounter(prev => Math.max(0, prev - 1));
  })

  const value = { counter, increment, decrement };

  return (
    <>
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
    </>
  );
};

// Custom hook for consuming context
export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};
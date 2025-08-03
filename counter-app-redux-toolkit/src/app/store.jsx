import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/CounterSlice';

// Load persisted state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxCounter');
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.log(err)
    return undefined;
  }
};

// Configure the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: loadState() // Initialize with persisted state
});

// Save to localStorage whenever state changes
store.subscribe(() => {
  localStorage.setItem('reduxCounter', JSON.stringify(store.getState().counter));
});

export default store;
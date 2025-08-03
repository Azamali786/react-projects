import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value = Math.max(0, state.value - 1);
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

// Export the action creators
export const { increment, decrement, reset } = counterSlice.actions;

// Export selectors
export const selectCount = (state) => state.counter.value;

// Export the reducer
export default counterSlice.reducer;
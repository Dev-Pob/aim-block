import { createSlice } from "@reduxjs/toolkit";

const initialCounter = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
  reducers: {
    increment(state) {
      state.counter++;
    },
    restart(state) {
      state.counter = 0;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialTimer = { timer: 10, isRunning: false };

const timerSlice = createSlice({
  name: "timer",
  initialState: initialTimer,
  reducers: {
    start(state) {
      state.timer = 10;
      state.isRunning = true;
    },
    resetState(state) {
      state.timer = 10;
      state.isRunning = false;
    },
  },
});

export const timerActions = timerSlice.actions;
export default timerSlice.reducer;

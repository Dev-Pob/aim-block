import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import timerReducer from "./timer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    timer: timerReducer,
  },
});

export default store;

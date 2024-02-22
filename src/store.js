import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "./features/timerSlice";
import meditationReducer from "./features/meditationSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    meditation: meditationReducer,
  },
});

export default store;

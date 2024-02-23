import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "./features/timerSlice";
import meditationReducer from "./features/meditationSlice";
import soundReducer from "./features/soundSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    meditation: meditationReducer,
    sound: soundReducer,
  },
});

export default store;

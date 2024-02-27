import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "./features/timerSlice";
import meditationReducer from "./features/meditationSlice";
import soundReducer from "./features/soundSlice";
import darkModeReducer from "./features/darkModeSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    meditation: meditationReducer,
    sound: soundReducer,
    darkMode: darkModeReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import timerSlice from "./features/timerSlice";
import timerReducer from "./features/timerSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;

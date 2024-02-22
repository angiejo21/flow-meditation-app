import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_DURATION } from "../config";

const initialState = {
  minutes: DEFAULT_DURATION,
  seconds: DEFAULT_DURATION * 60,
  isTimerOn: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    reset(state, action) {
      state.minutes = +action.payload / 60;
      state.seconds = +action.payload;
      state.isTimerOn = false;
    },
    playPause(state, action) {
      state.isTimerOn = !state.isTimerOn;
    },
    set(state, action) {
      state.minutes = +action.payload / 60;
      state.seconds = +action.payload;
    },
    countdown(state, action) {
      if (state.seconds < 0) return;
      state.seconds -= 1;
    },
  },
});

export const { reset, playPause, set, countdown } = timerSlice.actions;

export default timerSlice.reducer;

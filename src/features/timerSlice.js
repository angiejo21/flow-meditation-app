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
    stop(state, action) {
      state.minutes = DEFAULT_DURATION;
      state.seconds = DEFAULT_DURATION * 60;
      state.isTimerOn = false;
    },
    playPause(state, action) {
      state.isTimerOn = !state.isTimerOn;
    },
    set(state, action) {
      state.minutes = +action.payload;
      state.seconds = +action.payload * 60;
    },
    countdown(state, action) {
      if (state.seconds < 0) return;
      state.seconds -= 1;
    },
  },
});

export const { stop, playPause, set, countdown } = timerSlice.actions;

export default timerSlice.reducer;

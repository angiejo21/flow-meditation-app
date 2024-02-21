import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_MIN = 5;

const initialState = {
  minutes: DEFAULT_MIN,
  seconds: DEFAULT_MIN * 60,
  isTimerOn: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    stop(state, action) {
      state.minutes = DEFAULT_MIN;
      state.seconds = DEFAULT_MIN * 60;
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

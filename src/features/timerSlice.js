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
      state.seconds = state.seconds - 1;
    },
    timerOff(state, action) {
      state.isTimerOn = false;
    },
  },
});

export const { reset, playPause, set, countdown, timerOff } =
  timerSlice.actions;

export default timerSlice.reducer;

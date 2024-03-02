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
    resetTimer(state, action) {
      state.minutes = +action.payload / 60;
      state.seconds = +action.payload;
      state.isTimerOn = false;
    },
    playPauseTimer(state, action) {
      state.isTimerOn = !state.isTimerOn;
    },
    setTimer(state, action) {
      state.minutes = +action.payload / 60;
      state.seconds = +action.payload;
    },
    countdownTimer(state, action) {
      state.seconds = state.seconds - 1;
    },
    timerOff(state, action) {
      state.isTimerOn = false;
    },
  },
});

export const {
  resetTimer,
  playPauseTimer,
  setTimer,
  countdownTimer,
  timerOff,
} = timerSlice.actions;

export default timerSlice.reducer;

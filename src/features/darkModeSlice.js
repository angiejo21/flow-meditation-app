import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isThemeDark: window.matchMedia("(prefers-color-scheme: dark)").matches || false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isThemeDark = !state.isThemeDark;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const initialState = {
  isDarkModeOn:
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode(state, action) {
      state.isDarkModeOn = !state.isDarkModeOn;
      if (state.isDarkModeOn) {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttibute("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttibute("theme", "light");
      }
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;

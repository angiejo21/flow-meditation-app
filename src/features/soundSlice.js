import { createSlice } from "@reduxjs/toolkit";
import { soundData } from "../data/soundData";

const initialState = {
  soundData,
};

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    togglePlaySound(state, action) {
      const sound = state.soundData.find((el) => el.name === action.payload);
      sound.isPlaying = !sound.isPlaying;
    },
    changeVolume(state, action) {
      state.soundData.find(
        (el) => el.name === action.payload.soundName,
      ).volume = action.payload.value;
    },
    switchOffSound(state, action) {
      state.soundData.forEach((el) => {
        if (el.isPlaying) {
          el.isPlaying = false;
        }
        return;
      });
    },
  },
});

export const { togglePlaySound, changeVolume, switchOffSound } =
  soundSlice.actions;

export default soundSlice.reducer;

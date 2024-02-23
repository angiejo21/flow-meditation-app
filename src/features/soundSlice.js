import { createSlice } from "@reduxjs/toolkit";
import { soundData } from "../data/soundData";

const initialState = {
  soundData,
  selectedSounds: [],
};

const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    togglePlay(state, action) {
      state.soundData.filter((el) => el.name === action.payload)[0].isPlaying =
        !state.soundData.filter((el) => el.name === action.payload)[0]
          .isPlaying;
    },
    changeVolume(state, action) {
      state.soundData.filter(
        (el) => el.name === action.payload.soundName,
      )[0].volume = action.payload.value;
    },
    selectSounds(state, action) {
      state.selectedSounds = state.soundData.filter(
        (el) => el.isPlaying === true,
      );
    },
  },
});

export const { togglePlay, changeVolume, selectSounds } = soundSlice.actions;

export default soundSlice.reducer;
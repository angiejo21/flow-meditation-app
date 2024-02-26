import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_DURATION } from "../config";
import { practiceData as data } from "../data/practiceData";

const initialState = {
  data,
  selectedPractice: "",
  selectedExercise: "",
};

const meditationSlice = createSlice({
  name: "meditation",
  initialState,
  reducers: {
    selectPractice(state, action) {
      state.selectedPractice = action.payload;
      state.selectedExercise = state.selectedPractice.list[0];
    },
    selectExercise(state, action) {
      state.selectedExercise = state.selectedPractice.list.filter(
        (el) => el.id === action.payload,
      )[0];
    },
    selectDuration(state, action) {
      if (
        state.selectedPractice.name === "meditation" &&
        state.selectedExercise.id.slice(1) !== "00" &&
        action.payload <
          state.selectedPractice.list.filter(
            (el) => el.id === state.selectedExercise.id,
          )[0].duration.minutes
      )
        return;
      if (
        state.selectedPractice.name === "breathing" &&
        action.payload < state.selectedExercise.duration.default
      )
        return;
      if (state.selectedPractice.name === "meditation") {
        state.selectedExercise.duration.minutes = +action.payload;
        state.selectedExercise.duration.seconds = +action.payload * 60;
      } else {
        state.selectedExercise.duration.seconds = action.payload;
        state.selectedExercise.duration.minutes = Math.floor(
          action.payload / 60,
        );
        state.selectedExercise.reps =
          +action.payload / state.selectedExercise.step;
      }
    },
    defineRepetitionState(state, action) {
      //passo lo step
      if (state.selectedExercise.progression.count <= 1)
        state.selectedExercise.progression.count = state.selectedExercise.step;
      else
        state.selectedExercise.progression.count =
          state.selectedExercise.progression.count - 1;
      if (
        state.selectedExercise.progression.count >
          state.selectedExercise.progression.inhale[0] &&
        state.selectedExercise.progression.count <=
          state.selectedExercise.progression.inhale[1]
      ) {
        state.selectedExercise.progression.state = "inhale";
      } else if (
        state.selectedExercise.progression.count >
          state.selectedExercise.progression.exhale[0] &&
        state.selectedExercise.progression.count <=
          state.selectedExercise.progression.exhale[1]
      ) {
        state.selectedExercise.progression.state = "exhale";
      } else {
        state.selectedExercise.progression.state = "hold";
      }
      console.log(
        state.selectedExercise.progression.count,
        state.selectedExercise.progression.state,
      );
    },
  },
});

export const {
  selectPractice,
  selectExercise,
  selectDuration,
  defineRepetitionState,
} = meditationSlice.actions;

export default meditationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
      const isMeditation = state.selectedExercise.id.startsWith("M");

      //Early returns
      if (isMeditation && action.payload < 1) return;
      if (!isMeditation && action.payload < state.selectedExercise.step) return;
      //if it's a guided meditation it cannot last less than the audio
      if (
        isMeditation &&
        state.selectedExercise.id.slice(1) !== "00" &&
        action.payload <
          state.selectedPractice.list.filter(
            (el) => el.id === state.selectedExercise.id,
          )[0].duration.minutes
      )
        return;

      if (isMeditation) {
        state.selectedExercise.duration.minutes = +action.payload;
        state.selectedExercise.duration.seconds = +action.payload * 60;
      } else {
        state.selectedExercise.duration.seconds = +action.payload;
        state.selectedExercise.duration.minutes = Math.floor(
          +action.payload / 60,
        );
        state.selectedExercise.reps =
          +action.payload / state.selectedExercise.step;
      }
    },
    defineRepetitionState(state, action) {
      //se il conteggio del set dei secondi è sotto zero => ricomincia altrimenti lo abbassa
      if (state.selectedExercise.progression.count < 1) {
        state.selectedExercise.progression.count =
          state.selectedExercise.step - 1;
      } else {
        state.selectedExercise.progression.count =
          state.selectedExercise.progression.count - 1;
      }
      //se il conteggio è nella fascia 'inhale' setta lo stato
      if (
        state.selectedExercise.progression.count === 0 ||
        (state.selectedExercise.progression.count >
          state.selectedExercise.progression.inhale[0] &&
          state.selectedExercise.progression.count <
            state.selectedExercise.progression.inhale[1])
      ) {
        state.selectedExercise.progression.state = "inhale";
      } else if (
        //altrimenti controlla se è nella fascia 'exhale' e se lo è setta lo stato
        state.selectedExercise.progression.count >
          state.selectedExercise.progression.exhale[0] &&
        state.selectedExercise.progression.count <
          state.selectedExercise.progression.exhale[1]
      ) {
        state.selectedExercise.progression.state = "exhale";
      } else {
        //altrimenti mette in pausa
        state.selectedExercise.progression.state = "hold";
      }
    },
    resetRepetition(state, action) {
      state.selectedExercise.progression.count = state.selectedExercise.step;
      state.selectedExercise.progression.state = "pause";
    },
  },
});

export const {
  selectPractice,
  selectExercise,
  selectDuration,
  defineRepetitionState,
  resetRepetition,
} = meditationSlice.actions;

export default meditationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { practiceData } from "../data/practiceData";

const initialState = {
  practiceData,
  selectedPractice: "",
  selectedExercise: "",
  meditationInputShortcuts: [5, 10, 15],
};

const meditationSlice = createSlice({
  name: "meditation",
  initialState,
  reducers: {
    //M + B - definire il tipo di pratica
    selectPractice(state, action) {
      state.selectedPractice = action.payload;
      state.selectedExercise = state.selectedPractice.list[0];
    },
    //M + B - scegliere il tipo di esercizio
    selectExercise(state, action) {
      state.selectedExercise = state.selectedPractice.list.find(
        (el) => el.id === action.payload,
      );
    },
    //M + B - definire la durata dell'esercizio
    selectDuration(state, action) {
      const isMeditation = state.selectedExercise.id.startsWith("M");
      //Early returns
      if (isMeditation && action.payload < 1) return;
      //se è un esercizio di respirazione deve durare almeno una ripetizione
      if (!isMeditation && action.payload < state.selectedExercise.step) return;
      //se è una meditazione guidata non può durare meno dell'audio
      if (
        isMeditation &&
        state.selectedExercise.id !== "M00" &&
        action.payload <
          state.selectedPractice.list.find(
            (el) => el.id === state.selectedExercise.id,
          ).duration.minutes
      )
        return;
      //LOGICA (input meditazione in MIN respirazione SEC)
      if (isMeditation) {
        state.selectedExercise.duration.minutes = +action.payload;
        state.selectedExercise.duration.seconds = +action.payload * 60;
      } else {
        state.selectedExercise.duration.seconds = +action.payload;
        state.selectedExercise.duration.minutes = Math.floor(
          +action.payload / 60,
        );
        //fa scendere il conteggio delle ripetizioni
        state.selectedExercise.reps =
          +action.payload / state.selectedExercise.step;
      }
    },
    //B - scala il conteggio dei secondi della rep e in base cambia lo stato della pratica (inspirazione espirazione etc)
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
    //B - resetta il conteggio allo step iniziale e mette lo stato in 'pausa'
    resetRepetition(state, action) {
      state.selectedExercise.progression.count = state.selectedExercise.step;
      state.selectedExercise.progression.state = "pause";
    },
    //M - audio della meditazione
    playPauseMeditation(state, action) {
      if (state.selectedExercise.id.startsWith("B")) return;
      if (state.selectedExercise.id === "M00") return;
      state.selectedExercise.isReset = false;
      state.selectedExercise.isPlaying = !state.selectedExercise.isPlaying;
    },
    //M - Resetta l'audio della meditazione
    resetMeditation(state, action) {
      if (state.selectedExercise.id === "M00") return;
      state.selectedExercise.isReset = true;
      state.selectedExercise.isPlaying = false;
    },
  },
});

export const {
  selectPractice,
  selectExercise,
  selectDuration,
  defineRepetitionState,
  resetRepetition,
  playPauseMeditation,
  resetMeditation,
} = meditationSlice.actions;

export default meditationSlice.reducer;

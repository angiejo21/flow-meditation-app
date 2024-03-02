import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AnimationMeditation from "./AnimationMeditation";
import AnimationBreathing from "./AnimationBreathing";

import { countdownTimer, timerOff } from "../features/timerSlice";
import {
  defineRepetitionState,
  resetRepetition,
} from "../features/meditationSlice";
import { switchOffSound } from "../features/soundSlice";

function Countdown() {
  const { seconds, isTimerOn } = useSelector((store) => store.timer);
  const { selectedExercise } = useSelector((store) => store.meditation);
  const dispatch = useDispatch();

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const timerText = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  const isMeditation = selectedExercise.id.startsWith("M");

  useEffect(
    function () {
      //se finisce il countdown: cambia lo stato del timer, spegne la musica E SE è pratica di respirazione riporta il conteggio allo step iniziale
      if (seconds === 0) {
        dispatch(timerOff());
        dispatch(switchOffSound());
        if (!isMeditation) {
          dispatch(resetRepetition());
        } else {
          return;
        }
      }
      //fintantoché il timer è attivo: scala i secondi E SE è pratica di respirazione anche il conteggio
      if (isTimerOn && seconds >= 1) {
        const timer = setInterval(() => {
          dispatch(countdownTimer());
          if (!isMeditation) dispatch(defineRepetitionState());
        }, 1000);
        return () => clearInterval(timer);
      } else return;
    },
    [seconds, isTimerOn, dispatch, isMeditation],
  );

  return (
    <>
      <div className="relative h-80 w-80">
        {isMeditation ? <AnimationMeditation /> : <AnimationBreathing />}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform font-heading text-6xl text-teal-900 dark:text-teal-100">
          {timerText}
        </div>
        {!isMeditation && (
          <div className="absolute left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 transform text-xl font-semibold uppercase text-teal-900 transition-all dark:text-teal-100">
            {selectedExercise.progression.state}
          </div>
        )}
      </div>
    </>
  );
}

export default Countdown;

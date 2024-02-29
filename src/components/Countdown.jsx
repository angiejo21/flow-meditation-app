import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countdown, timerOff } from "../features/timerSlice";
import { defineRepetitionState, resetRepetition } from "../features/meditationSlice";
import SvgMeditation from "./SvgMeditation";
import SvgBreathing from "./SvgBreathing";
import { switchOffMusic } from "../features/soundSlice";

function Countdown() {
  const { seconds, isTimerOn } = useSelector((store) => store.timer);
  const { selectedPractice, selectedExercise } = useSelector(
    (store) => store.meditation,
  );
  const dispatch = useDispatch();

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const timerText = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

  useEffect(
    function () {
      if (seconds === 0) {
        dispatch(timerOff());
        dispatch(switchOffMusic())
        if(selectedPractice.name === "breathing"){
          dispatch(resetRepetition())
        }else{
          return
        }
      }
      if (isTimerOn && seconds >= 1) {
        const timer = setInterval(() => {
          dispatch(countdown());
          if(selectedPractice.name === "breathing") dispatch(defineRepetitionState());
        }, 1000);
        return () => clearInterval(timer);
      } else return;
    },
    [seconds, isTimerOn, dispatch, selectedPractice.name],
  );

  return (
    <>
      <div className="relative w-80 h-80">
        {selectedPractice.name === "meditation" ? (
          <SvgMeditation />
        ) : (
          <SvgBreathing />
        )}
        <div className="text-6xl font-heading text-teal-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 dark:text-teal-100">
          {timerText}
        </div>
        {selectedPractice.name === "breathing" && (
          <div className="uppercase text-xl text-teal-900 font-semibold absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all dark:text-teal-100">
            {selectedExercise.progression.state}
          </div>
        )}
      </div>
    </>
  );
}

export default Countdown;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countdown, timerOff } from "../features/timerSlice";
import { defineRepetitionState } from "../features/meditationSlice";
import SvgMeditation from "./SvgMeditation";
import SvgBreathing from "./SvgBreathing";

function Countdown() {
  const { seconds, isTimerOn } = useSelector((store) => store.timer);
  const { selectedPractice } = useSelector((store) => store.meditation);
  const dispatch = useDispatch();

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const timerText = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

  useEffect(
    function () {
      if (seconds === 0) {
        dispatch(timerOff());
      }
      if (isTimerOn && seconds >= 1) {
        const timer = setInterval(() => {
          dispatch(countdown());
          dispatch(defineRepetitionState());
        }, 1000);
        return () => clearInterval(timer);
      } else return;
    },
    [seconds, isTimerOn, dispatch],
  );

  return (
    <>
      <div className="relative w-64 h-64 border">
        {selectedPractice.name === "meditation" ? (
          <SvgMeditation />
        ) : (
          <SvgBreathing />
        )}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border z-10">
          {timerText}
        </div>
      </div>
    </>
  );
}

export default Countdown;

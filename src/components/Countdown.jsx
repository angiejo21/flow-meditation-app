import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countdown } from "../features/timerSlice";

function Countdown() {
  const { minutes, seconds, isTimerOn } = useSelector((store) => store.timer);
  const dispatch = useDispatch();

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const timerText = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

  function circlePercentage(secs) {
    return (secs / (minutes * 60)) * 100;
  }

  useEffect(
    function () {
      if (isTimerOn && seconds > 0) {
        const timer = setInterval(() => {
          dispatch(countdown());
        }, 1000);
        return () => clearInterval(timer);
      } else return;
    },
    [seconds, isTimerOn, dispatch],
  );

  return (
    <>
      <div className="relative w-64 h-64 border">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            stroke="green"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="yellow"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="280"
            strokeDashoffset={`${280 - (280 * circlePercentage(seconds)) / 100}`}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border">
          {timerText}
        </div>
      </div>
    </>
  );
}

export default Countdown;

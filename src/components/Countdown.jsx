import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countdown } from "../features/timerSlice";

function Countdown() {
  const { seconds, isTimerOn } = useSelector((store) => store.timer);
  const dispatch = useDispatch();

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  const timerText = `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;

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

  return <div>{timerText}</div>;
}

export default Countdown;

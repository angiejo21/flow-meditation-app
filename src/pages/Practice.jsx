import { useDispatch, useSelector } from "react-redux";
import { FaStop, FaPlay, FaPause } from "react-icons/fa";

import { playPause, stop } from "../features/timerSlice";

import Button from "../components/Button";
import Timer from "../components/Timer";

function Practice() {
  const { minutes, seconds, isTimerOn } = useSelector((store) => store.timer);
  const dispatch = useDispatch();

  return (
    <div>
      <Timer minutes={minutes} seconds={seconds} isTimerOn={isTimerOn} />
      <Button styled="control" onClick={() => dispatch(playPause())}>
        {isTimerOn ? <FaPause /> : <FaPlay />}
      </Button>
      <Button styled="reset" onClick={() => dispatch(stop())}>
        <FaStop />
      </Button>
    </div>
  );
}

export default Practice;

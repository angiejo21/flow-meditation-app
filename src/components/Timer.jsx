import { useDispatch, useSelector } from "react-redux";
import { FaStop, FaPlay, FaPause } from "react-icons/fa";

import { playPause, reset } from "../features/timerSlice";
import { resetRepetition } from "../features/meditationSlice";

import Button from "../components/Button";
import Countdown from "../components/Countdown";

function Timer() {
  const { isTimerOn } = useSelector((store) => store.timer);
  const { id, duration:{seconds} } = useSelector(
    (store) => store.meditation.selectedExercise,
  );
  const dispatch = useDispatch();

  function resetTimer() {
    dispatch(reset(seconds));
    if(id.startsWith('B')) dispatch(resetRepetition());
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Countdown />
      <div>
        <Button styled="play" onClick={() => dispatch(playPause())}>
          {isTimerOn ? <FaPause /> : <FaPlay />}
        </Button>

        <Button styled="reset" onClick={() => resetTimer()}>
          <FaStop />
        </Button>
      </div>
      {!isTimerOn && (
        <Button type="link" pageTo="/settings" styled="secondary">
          &larr; Back
        </Button>
      )}
    </div>
  );
}

export default Timer;

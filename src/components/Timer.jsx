import { useDispatch, useSelector } from "react-redux";
import { FaStop, FaPlay, FaPause } from "react-icons/fa";

import { playPauseTimer, reset } from "../features/timerSlice";
import {
  playPauseMeditation,
  resetMeditation,
  resetRepetition,
} from "../features/meditationSlice";

import Button from "../components/Button";
import Countdown from "../components/Countdown";

function Timer() {
  const { isTimerOn } = useSelector((store) => store.timer);
  const {
    id,
    duration: { seconds },
  } = useSelector((store) => store.meditation.selectedExercise);
  const dispatch = useDispatch();

  function resetTimer() {
    dispatch(reset(seconds));
    if (id.startsWith("B")) dispatch(resetRepetition());
    if (id.startsWith("M")) dispatch(resetMeditation());
  }

  function playPause() {
    dispatch(playPauseTimer());
    dispatch(playPauseMeditation());
  }

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Countdown />
      <div>
        <Button styled="play" onClick={playPause}>
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

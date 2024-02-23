import { useDispatch, useSelector } from "react-redux";
import { FaStop, FaPlay, FaPause } from "react-icons/fa";

import { playPause, reset } from "../features/timerSlice";

import Button from "../components/Button";
import Countdown from "../components/Countdown";
import Audio from "./Audio";

function Timer() {
  const { isTimerOn } = useSelector((store) => store.timer);
  const { soundData } = useSelector((store) => store.sound);
  const { seconds } = useSelector(
    (store) => store.meditation.selectedExercise.duration,
  );
  const dispatch = useDispatch();

  return (
    <>
      <Countdown />
      <Button styled="control" onClick={() => dispatch(playPause())}>
        {isTimerOn ? <FaPause /> : <FaPlay />}
      </Button>
      <Button styled="reset" onClick={() => dispatch(reset(seconds))}>
        <FaStop />
      </Button>
      {!isTimerOn && (
        <Button type="link" pageTo="/settings" styled="secondary">
          &larr; Back
        </Button>
      )}
      {soundData.map((sound) => (
        <Audio
          src={sound.src}
          volume={sound.volume}
          isPlaying={sound.isPlaying}
          key={sound.name}
        />
      ))}
    </>
  );
}

export default Timer;
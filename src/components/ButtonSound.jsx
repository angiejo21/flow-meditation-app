import { useDispatch } from "react-redux";

import Button from "./Button";
import { changeVolume, togglePlay } from "../features/soundSlice";
import { soundDataRender } from "../data/soundData";

function ButtonSound({ sound }) {
  const dispatch = useDispatch();
  const icon = soundDataRender.find((el) => el.name === sound.name).icon;

  function handleSound(soundName) {
    dispatch(togglePlay(soundName));
  }

  function handleVolume(value, soundName) {
    dispatch(changeVolume({ value, soundName }));
  }

  return (
    <div className="flex flex-col">
      <Button styled="control" onClick={() => handleSound(sound.name)}>
        {icon}
      </Button>
      {sound.isPlaying ? (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={sound.volume}
          onChange={(e) => handleVolume(e.target.value, sound.name)}
        />
      ) : (
        <p>{sound.name}</p>
      )}
    </div>
  );
}

export default ButtonSound;

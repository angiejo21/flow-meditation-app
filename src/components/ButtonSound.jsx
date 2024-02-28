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
    <div className="flex flex-col w-20 items-center justify-start md:w-24 lg:w-32">
      <Button
        styled={sound.isPlaying ? "soundOn" : "sound"}
        onClick={() => handleSound(sound.name)}
      >
        {icon}
      </Button>
      <div>
        {sound.isPlaying ? (
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={sound.volume}
            onChange={(e) => handleVolume(e.target.value, sound.name)}
            className="w-full accent-teal-600"
          />
        ) : (
          <p className="font-heading text-center text-xs md:text-lg text-teal-800">
            {sound.name}
          </p>
        )}
      </div>
    </div>
  );
}

export default ButtonSound;

import { useSelector } from "react-redux";

import Audio from "./Audio";

function Audios() {
  const { soundData } = useSelector((store) => store.sound);
  return (
    <>
      {soundData.map((sound) => (
        <Audio
          src={sound.src}
          volume={sound.volume}
          isPlaying={sound.isPlaying}
          loop={true}
          key={sound.name}
        />
      ))}
    </>
  );
}

export default Audios;

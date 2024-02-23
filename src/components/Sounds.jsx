import { useSelector } from "react-redux";
import ButtonSound from "./ButtonSound";
import Audio from "./Audio";

function Sounds() {
  const { soundData } = useSelector((store) => store.sound);
  return (
    <div className="flex flex-wrap">
      {soundData.map((sound) => (
        <ButtonSound sound={sound} key={sound.name} />
      ))}
      {soundData.map((sound) => (
        <Audio
          src={sound.src}
          volume={sound.volume}
          isPlaying={sound.isPlaying}
          key={sound.name}
        />
      ))}
    </div>
  );
}

export default Sounds;

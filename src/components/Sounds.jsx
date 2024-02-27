import { useSelector } from "react-redux";
import ButtonSound from "./ButtonSound";

function Sounds() {
  const { soundData } = useSelector((store) => store.sound);
  return (
    <div className="flex flex-wrap justify-center">
      {soundData.map((sound) => (
        <ButtonSound sound={sound} key={sound.name} />
      ))}
    </div>
  );
}

export default Sounds;

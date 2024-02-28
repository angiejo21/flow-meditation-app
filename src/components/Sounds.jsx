import { useSelector } from "react-redux";
import ButtonSound from "./ButtonSound";

function Sounds() {
  const { soundData } = useSelector((store) => store.sound);
  return (
    <div className="flex flex-wrap justify-center mb-3 md:w-2/3 md:gap-4 lg:w-1/2">
      {soundData.map((sound) => (
        <ButtonSound sound={sound} key={sound.name} />
      ))}
    </div>
  );
}

export default Sounds;

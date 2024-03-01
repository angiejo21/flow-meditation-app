import { useSelector } from "react-redux";

import ButtonSound from "./ButtonSound";

function Sounds() {
  const { soundData } = useSelector((store) => store.sound);
  return (
    <div className="mb-3 flex flex-wrap justify-center gap-1 md:w-2/3 md:gap-4 lg:w-1/2">
      {soundData.map((sound) => (
        <ButtonSound sound={sound} key={sound.name} />
      ))}
    </div>
  );
}

export default Sounds;

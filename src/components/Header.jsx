import { useSelector } from "react-redux";
import ButtonMusic from "./ButtonMusic";
import ButtonTheme from "./ButtonTheme";
import Logo from "./Logo";

function Header() {
  const {soundData} = useSelector((store)=>store.sound)
  const isMusicPlaying = soundData.some(el=>el.isPlaying === true)
  return (
    <header className=" w-full flex items-center justify-between p-2">
      <Logo />
      <div>
        {isMusicPlaying && <ButtonMusic />}
        <ButtonTheme />
      </div>
    </header>
  );
}

export default Header;

import Button from "./Button";
import { PiMusicNotesFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/darkModeSlice";

function ButtonMusic() {
  const { isDarkModeOn } = useSelector((store) => store.darkMode);
  const dispatch = useDispatch();

  return (
    <Button styled="header" onClick={() => dispatch(toggleDarkMode())}>
      <PiMusicNotesFill />
    </Button>
  );
}

export default ButtonMusic;

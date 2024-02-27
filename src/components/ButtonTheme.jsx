import Button from "./Button";
import { PiMoon } from "react-icons/pi";
import { PiSun } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../features/darkModeSlice";

function ButtonTheme() {
  const { isDarkModeOn } = useSelector((store) => store.darkMode);
  const dispatch = useDispatch();

  return (
    <Button styled="control" onClick={() => dispatch(toggleDarkMode())}>
      {isDarkModeOn ? <PiMoon /> : <PiSun />}
    </Button>
  );
}

export default ButtonTheme;

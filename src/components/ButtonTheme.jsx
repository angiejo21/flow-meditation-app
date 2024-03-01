import { useDispatch, useSelector } from "react-redux";
import { PiMoon } from "react-icons/pi";
import { PiSun } from "react-icons/pi";

import Button from "./Button";

import { toggleDarkMode } from "../features/darkModeSlice";

function ButtonTheme() {
  const { isThemeDark } = useSelector((store) => store.darkMode);
  const dispatch = useDispatch();

  return (
    <Button styled="header" onClick={() => dispatch(toggleDarkMode())}>
      {isThemeDark ? <PiSun /> : <PiMoon />}
    </Button>
  );
}

export default ButtonTheme;

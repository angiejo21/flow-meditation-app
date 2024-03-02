import { useDispatch } from "react-redux";
import { PiSpeakerSimpleSlash } from "react-icons/pi";

import Button from "./Button";

import { switchOffSound } from "../features/soundSlice";

function ButtonSoundOff() {
  const dispatch = useDispatch();

  return (
    <Button styled="header" onClick={() => dispatch(switchOffSound())}>
      <PiSpeakerSimpleSlash />
    </Button>
  );
}

export default ButtonSoundOff;

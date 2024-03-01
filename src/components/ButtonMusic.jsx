import { PiSpeakerSimpleSlash } from "react-icons/pi";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { switchOffMusic } from "../features/soundSlice";

function ButtonMusic() {
  const dispatch = useDispatch();

  return (
    <Button styled="header" onClick={() => dispatch(switchOffMusic())}>
      <PiSpeakerSimpleSlash />
    </Button>
  );
}

export default ButtonMusic;

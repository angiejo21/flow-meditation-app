import { TbMusicOff } from "react-icons/tb";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { switchOffMusic } from "../features/soundSlice";

function ButtonMusic() {
  const dispatch = useDispatch();

  return (
    <Button styled="header" onClick={() => dispatch(switchOffMusic())}>
      <TbMusicOff />
    </Button>
  );
}

export default ButtonMusic;

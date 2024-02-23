import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import { set } from "../features/timerSlice";
import { selectSounds } from "../features/soundSlice";

function ButtonStart() {
  const { seconds } = useSelector(
    (store) => store.meditation.selectedExercise.duration,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleStart() {
    dispatch(set(seconds));
    dispatch(selectSounds())
    navigate("/practice");
  }

  return (
    <Button styled="primary" onClick={handleStart}>
      Start
    </Button>
  );
}

export default ButtonStart;

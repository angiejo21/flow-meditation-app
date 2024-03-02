import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import { setTimer } from "../features/timerSlice";

function ButtonStart() {
  const { seconds } = useSelector(
    (store) => store.meditation.selectedExercise.duration,
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleStart() {
    dispatch(setTimer(seconds));
    navigate("/practice");
  }

  return (
    <Button styled="primary" onClick={handleStart}>
      Start
    </Button>
  );
}

export default ButtonStart;

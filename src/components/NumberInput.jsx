import { useDispatch, useSelector } from "react-redux";

import { selectDuration } from "../features/meditationSlice";

function NumberInput() {
  const { selectedExercise } = useSelector((state) => state.meditation);
  const dispatch = useDispatch();

  const duration =
    selectedExercise.duration?.default || selectedExercise.duration;
  const step = selectedExercise.step || 1;

  // console.log(selectedExercise);
  console.log(step);

  function handleChange(amount) {
    let duration = amount;

    dispatch(selectDuration(duration));
  }
  return (
    <div>
      <label>
        {selectedExercise.id.startsWith("M") ? "Minutes" : "Seconds"}
      </label>
      <input
        type="number"
        placeholder="Some number here"
        value={duration}
        step={step}
        onChange={(e) => dispatch(selectDuration(e.target.value))}
      />
    </div>
  );
}

export default NumberInput;

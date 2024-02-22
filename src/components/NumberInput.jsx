import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";

import { selectDuration } from "../features/meditationSlice";

function NumberInput() {
  const { selectedExercise } = useSelector((state) => state.meditation);
  const dispatch = useDispatch();

  const duration = selectedExercise.id.startsWith("M")
    ? selectedExercise.duration.minutes
    : selectedExercise.duration.seconds;

  const step = selectedExercise.step || 1;
  const meditationShortcuts = [5, 10, 15];

  return (
    <div>
      <label>
        {selectedExercise.id.startsWith("M") ? "Minutes" : "Seconds"}
      </label>
      <input
        type="number"
        value={duration}
        step={step}
        onChange={(e) => dispatch(selectDuration(e.target.value))}
      />

      {selectedExercise.id.startsWith("B") && (
        <p>{selectedExercise.duration.seconds / selectedExercise.step} reps</p>
      )}

      {selectedExercise.id.startsWith("M") && (
        <>
          {meditationShortcuts.map((option) => (
            <Button
              onClick={() => dispatch(selectDuration(option))}
              key={option}
            >
              {option}
            </Button>
          ))}
        </>
      )}
    </div>
  );
}

export default NumberInput;

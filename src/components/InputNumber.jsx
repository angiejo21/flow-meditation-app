import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";

import { selectDuration } from "../features/meditationSlice";

function InputNumber() {
  const { selectedExercise } = useSelector((state) => state.meditation);
  const dispatch = useDispatch();

  const duration = selectedExercise.id.startsWith("M")
    ? selectedExercise.duration.minutes
    : selectedExercise.duration.seconds;

  const step = selectedExercise.step || 1;
  const meditationShortcuts = [5, 10, 15];

  return (
    <div className="flex flex-wrap gap-2 items-center text-xl">
      <label className="text-slate-600 font-heading pr-2">
        {selectedExercise.id.startsWith("M") ? "Minutes" : "Seconds"}
      </label>
      <input
        className="w-24 py-2 px-4 rounded-full  outline-none focus:ring focus:ring-teal-500"
        type="number"
        value={duration}
        step={step}
        onChange={(e) => dispatch(selectDuration(e.target.value))}
      />
      {selectedExercise.id.startsWith("B") && (
        <p className="text-slate-600 font-heading pl-2">
          {selectedExercise.reps} reps
        </p>
      )}

      <div className="flex">
        {selectedExercise.id.startsWith("M") && (
          <>
            {meditationShortcuts.map((option) => (
              <Button
                styled="secondary"
                onClick={() => dispatch(selectDuration(option))}
                key={option}
              >
                {option} min
              </Button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default InputNumber;

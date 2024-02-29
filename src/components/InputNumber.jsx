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
    <div className="flex flex-wrap gap-2 items-center">
      <div className="flex items-center">
        <label className="pr-4 font-heading text-slate-600 dark:text-slate-300">
          {selectedExercise.id.startsWith("M") ? "Minutes" : "Seconds"}
        </label>
        <input
          className="w-24 py-2 px-4 bg-slate-50 rounded-full outline-none focus:ring focus:ring-teal-500 md:w-36 dark:bg-slate-950 dark:text-teal-100"
          type="number"
          value={duration}
          step={step}
          onChange={(e) => dispatch(selectDuration(e.target.value))}
          />
        {selectedExercise.id.startsWith("B") && (
          <p className="pl-4 text-slate-600 font-heading dark:text-slate-300">
            {selectedExercise.reps} reps
          </p>
        )}
      </div>

      <div className="flex flex-1 justify-center ">
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

import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";

import { selectDuration } from "../features/meditationSlice";

function InputNumber() {
  const { selectedExercise, meditationInputShortcuts } = useSelector(
    (state) => state.meditation,
  );
  const dispatch = useDispatch();

  const duration = selectedExercise.id.startsWith("M")
    ? selectedExercise.duration.minutes
    : selectedExercise.duration.seconds;

  const step = selectedExercise.step || 1;
  const isMeditation = selectedExercise.id.startsWith("M");

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center">
        <label className="pr-2 font-heading text-slate-600 dark:text-slate-300">
          {isMeditation ? "Minutes" : "Seconds"}
        </label>
        <div className="relative">
          <input
            className="w-full rounded-full bg-slate-50 px-4 py-2 text-center outline-none focus:ring focus:ring-teal-500 dark:bg-slate-950 dark:text-teal-100 md:w-44 lg:w-full "
            type="number"
            placeholder={duration}
            disabled
          />
          <Button
            styled="inputNumberMinus"
            onClick={() => dispatch(selectDuration(duration - step))}
          >
            -
          </Button>
          <Button
            styled="inputNumberPlus"
            onClick={() => dispatch(selectDuration(duration + step))}
          >
            +
          </Button>
        </div>
        {!isMeditation && (
          <p className="pl-2 font-heading text-slate-600 dark:text-slate-300">
            {selectedExercise.reps} reps
          </p>
        )}
      </div>

      <div className="flex w-full justify-center sm:w-auto sm:flex-1 ">
        {isMeditation && (
          <>
            {meditationInputShortcuts.map((option) => (
              <Button
                styled="inputNumber"
                onClick={() => dispatch(selectDuration(duration + option))}
                key={option}
              >
                + {option}
              </Button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default InputNumber;

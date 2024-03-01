import { useDispatch, useSelector } from "react-redux";

import { selectExercise } from "../features/meditationSlice";

function InputSelect() {
  const {
    selectedPractice: { list },
    selectedExercise,
  } = useSelector((state) => state.meditation);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-2">
      <label className="font-heading text-slate-600 dark:text-slate-300">
        Select an exercise
      </label>
      <select
        onChange={(e) => dispatch(selectExercise(e.target.value))}
        value={selectedExercise.id}
        className="w-full rounded-full bg-slate-50 p-2 text-teal-950 outline-none focus:ring focus:ring-teal-500 dark:bg-slate-950 dark:text-teal-100"
      >
        {list.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;

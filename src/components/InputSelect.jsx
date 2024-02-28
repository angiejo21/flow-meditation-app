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
      <label className="text-slate-600 font-heading">Select an exercise</label>
      <select
        onChange={(e) => dispatch(selectExercise(e.target.value))}
        value={selectedExercise.id}
        className="p-2 bg-slate-50 rounded-full outline-none focus:ring focus:ring-teal-500"
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

import { useDispatch, useSelector } from "react-redux";

import { selectExercise } from "../features/meditationSlice";

function InputSelect() {
  const {
    selectedPractice: { list },
  } = useSelector((state) => state.meditation);
  const dispatch = useDispatch();

  return (
    <div>
      <label>Select an exercise</label>
      <select onChange={(e) => dispatch(selectExercise(e.target.value))}>
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

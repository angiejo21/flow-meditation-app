import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import SelectInput from "./SelectInput";
import NumberInput from "./NumberInput";
import Info from "./Info";

import { selectPractice } from "../features/meditationSlice";

function Form() {
  const { data, selectedPractice, selectedExercise } = useSelector(
    (state) => state.meditation,
  );
  const dispatch = useDispatch();

  console.log(selectedPractice);
  console.log(selectedExercise);

  function handlerButton(e, action, payload) {
    e.preventDefault();
    dispatch(action(payload));
  }

  return (
    <form>
      {data.map((el) => (
        <Button
          styled="primary"
          key={el.name}
          onClick={(e) => handlerButton(e, selectPractice, el)}
        >
          {el.name}
        </Button>
      ))}
      {selectedPractice && <SelectInput />}
      {selectedExercise && (
        <>
          <Info />
          <NumberInput />
        </>
      )}
      {selectedPractice.name === "breathing" && (
        <p>{selectedExercise.duration / selectedExercise.step} reps</p>
      )}

      <Button type="link" pageTo="/" styled="secondary">
        &larr; Back
      </Button>
      {selectedPractice && (
        <Button type="link" pageTo="/practice" styled="primary">
          Start
        </Button>
      )}
    </form>
  );
}

export default Form;

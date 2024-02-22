import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";
import SelectInput from "./SelectInput";
import NumberInput from "./NumberInput";
import Info from "./Info";

import { selectPractice } from "../features/meditationSlice";
import ButtonStart from "./ButtonStart";

function Form() {
  const { data, selectedPractice, selectedExercise } = useSelector(
    (store) => store.meditation,
  );
  const dispatch = useDispatch();

  return (
    <form>
      {data.map((practice) => (
        <Button
          styled="primary"
          key={practice.name}
          onClick={() => dispatch(selectPractice(practice))}
        >
          {practice.name}
        </Button>
      ))}

      {selectedPractice && <SelectInput />}

      {selectedExercise && <Info />}

      {selectedExercise && <NumberInput />}

      <Button type="link" pageTo="/" styled="secondary">
        &larr; Back
      </Button>
      {selectedPractice && <ButtonStart />}
    </form>
  );
}

export default Form;

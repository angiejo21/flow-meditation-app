import { useSelector } from "react-redux";

import Button from "./Button";
import InputSelect from "./InputSelect";
import InputNumber from "./InputNumber";
import InputPractice from "./InputPractice";
import Info from "./Info";

import ButtonStart from "./ButtonStart";
import Sounds from "./Sounds";

function Form() {
  const { selectedPractice, selectedExercise } = useSelector(
    (store) => store.meditation,
  );

  return (
    <form>
      {!selectedPractice ? <InputPractice /> : <Sounds />}

      {selectedPractice && <InputSelect />}

      {selectedExercise && <Info />}

      {selectedExercise && <InputNumber />}

      <Button type="link" pageTo="/" styled="secondary">
        &larr; Back
      </Button>
      {selectedPractice && <ButtonStart />}
    </form>
  );
}

export default Form;

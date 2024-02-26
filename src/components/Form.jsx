import { useSelector } from "react-redux";

import Button from "./Button";
import InputSelect from "./InputSelect";
import InputNumber from "./InputNumber";
import InputPractice from "./InputPractice";
import Info from "./Info";
import ButtonStart from "./ButtonStart";

function Form() {
  const { selectedPractice } = useSelector((store) => store.meditation);

  return (
    <form>
      <InputPractice />

      {selectedPractice && (
        <>
          <InputSelect />
          <Info />
          <InputNumber />
          <Button type="link" pageTo="/music" styled="primary">
            Sounds
          </Button>
        </>
      )}

      <Button type="link" pageTo="/" styled="secondary">
        &larr; Back
      </Button>
      {selectedPractice && <ButtonStart />}
    </form>
  );
}

export default Form;

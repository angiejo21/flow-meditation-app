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
    <form className="flex flex-col gap-3 px-3 md:w-2/3 md:text-xl lg:w-1/2">
      <InputPractice />

      {selectedPractice && (
        <>
          <InputSelect />
          <Info />
          <InputNumber />
          <div className="flex">
            <Button type="link" pageTo="/music" styled="secondary">
              Sounds
            </Button>
            <ButtonStart />
          </div>
        </>
      )}
    </form>
  );
}

export default Form;

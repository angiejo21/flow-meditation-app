import Button from "./Button";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";
import Info from "./Info";

function Form() {
  return (
    <form>
      <SelectInput />
      <Info />
      <TextInput />
      <Button type="link" pageTo="/" styled="secondary">
        &larr; Back
      </Button>
      <Button type="link" pageTo="/practice" styled="primary">
        Start
      </Button>
    </form>
  );
}

export default Form;

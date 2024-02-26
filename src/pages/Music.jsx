import Button from "../components/Button";
import Sounds from "../components/Sounds";

function Music() {
  return (
    <>
      <Sounds />
      <Button type="link" pageTo="/settings" styled="secondary">
        &larr; Back
      </Button>
    </>
  );
}

export default Music;

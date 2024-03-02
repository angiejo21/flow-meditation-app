import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";

import { selectPractice } from "../features/meditationSlice";

function InputPractice() {
  const { practiceData } = useSelector((store) => store.meditation);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      {practiceData.map((practice) => (
        <Button
          styled="secondary"
          key={practice.name}
          onClick={() => dispatch(selectPractice(practice))}
        >
          {practice.name}
        </Button>
      ))}
    </div>
  );
}

export default InputPractice;

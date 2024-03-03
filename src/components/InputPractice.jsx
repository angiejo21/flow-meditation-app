import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";

import { selectPractice } from "../features/meditationSlice";

function InputPractice() {
  const { practiceData } = useSelector((store) => store.meditation);
  console.log(practiceData);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      {practiceData.map((practice) => (
        <Button
          styled={practice.isSelected ? "secondarySelected" : "secondary"}
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

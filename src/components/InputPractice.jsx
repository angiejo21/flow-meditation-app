import { useDispatch, useSelector } from "react-redux";

import Button from "./Button";

import { selectPractice } from "../features/meditationSlice";

function InputPractice() {
  const { data } = useSelector((store) => store.meditation);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center">
      {data.map((practice) => (
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

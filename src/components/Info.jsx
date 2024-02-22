import { useSelector } from "react-redux";

function Info() {
  const { selectedExercise } = useSelector((state) => state.meditation);

  return (
    <div>
      <p>{selectedExercise.description}</p>
    </div>
  );
}

export default Info;

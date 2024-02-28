import { useSelector } from "react-redux";

function Info() {
  const { selectedExercise } = useSelector((state) => state.meditation);

  return (
    <div className="md:text-lg text-slate-600 py-2">
      <p>{selectedExercise.description}</p>
    </div>
  );
}

export default Info;

import { useSelector } from "react-redux";

function Info() {
  const { selectedExercise } = useSelector((state) => state.meditation);

  return (
    <div className="py-2 md:text-lg text-slate-600 dark:text-slate-300">
      <p>{selectedExercise.description}</p>
    </div>
  );
}

export default Info;

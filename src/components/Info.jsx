import { useSelector } from "react-redux";
import parse from "html-react-parser";

function Info() {
  const {
    selectedExercise: { description },
  } = useSelector((state) => state.meditation);

  return (
    <div className="py-2 text-slate-600 dark:text-slate-300 md:text-lg">
      {parse(description)}
    </div>
  );
}

export default Info;

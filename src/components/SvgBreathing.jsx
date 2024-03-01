import { useSelector } from "react-redux";

function SvgBreathing() {
  const { selectedExercise } = useSelector((store) => store.meditation);
  const { isThemeDark } = useSelector((store) => store.darkMode);

  const variantsLight = {
    inhale: "bg-teal-400",
    exhale: "bg-teal-600",
    hold: "bg-lime-400",
  };
  const variantsDark = {
    inhale: "bg-teal-600",
    exhale: "bg-teal-800",
    hold: "bg-teal-800",
  };

  const variant = isThemeDark
    ? variantsDark[selectedExercise.progression.state]
    : variantsLight[selectedExercise.progression.state];

  return (
    <div
      className={`absolute left-0 top-0 h-80 w-80 rounded-full ${variant} transition-colors duration-500`}
    ></div>
  );
}

export default SvgBreathing;

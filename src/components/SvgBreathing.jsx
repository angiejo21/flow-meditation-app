import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function SvgBreathing() {
  const { selectedExercise } = useSelector((store) => store.meditation);

  const variants = {
    inhale: { backgroundColor: "#00f", opacity: 1 },
    exhale: { backgroundColor: "#f00", opacity: 1 },
    hold: { backgroundColor: "#eee", opacity: 0.8 },
  };
  const variant = variants[selectedExercise.progression.state];

  return (
    <motion.div
      className="w-32 h-32 rounded-full absolute top-1/4 left-1/4 bg-transparent border border-teal-500"
      animate={variant}
      variants={variants}
    ></motion.div>
  );
}

export default SvgBreathing;

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function SvgBreathing() {
  const { selectedExercise } = useSelector((store) => store.meditation);

  const variants = {
    inhale: { backgroundColor: "#2DD4BF", opacity: 1 },
    exhale: { backgroundColor: "#0D9488", opacity: 1 },
    hold: { backgroundColor: "#A3E635", opacity: 1 },
  };
  const variant = variants[selectedExercise.progression.state];

  return (
    <motion.div
      className="w-80 h-80 rounded-full absolute top-0 left-0"
      animate={variant}
      variants={variants}
    ></motion.div>
  );
}

export default SvgBreathing;

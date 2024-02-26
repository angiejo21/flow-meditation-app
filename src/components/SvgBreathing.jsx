import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
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

// {
//   scale: [1, 2, 2, 1],
//   border: ["1px solid #00f"],
// }}
// transition={{
//   duration: selectedExercise.step,
//   ease: "easeInOut",
//   times: [0, 0.25, 0.5, 0.75],
//   repeat: selectedExercise.reps,
// }

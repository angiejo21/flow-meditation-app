import { useSelector } from "react-redux";
import Audio from "./Audio";

function AudioMeditation() {
  const { selectedExercise } = useSelector((store) => store.meditation);
  if (selectedExercise.id.startsWith("B")) return null;
  return (
    <>
      <Audio
        src={selectedExercise.src}
        volume={selectedExercise.volume}
        isPlaying={selectedExercise.isPlaying}
        isReset={selectedExercise.isReset}
        key={selectedExercise.name}
      />
    </>
  );
}

export default AudioMeditation;

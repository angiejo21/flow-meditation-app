import { useEffect, useRef } from "react";

function Audio({ isPlaying, volume, src }) {
  const audioRef = useRef(null);

  useEffect(
    function () {
      const audioElement = audioRef.current;
      if (!audioElement) return;
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }

      audioElement.volume = volume;
    },
    [isPlaying, volume],
  );

  return <audio ref={audioRef} src={src} loop />;
}

export default Audio;

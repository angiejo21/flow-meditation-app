import { useEffect, useRef } from "react";

function Audio({ isPlaying, volume, src, isReset, loop }) {
  const audioRef = useRef(null);

  useEffect(
    function () {
      const audioElement = audioRef.current;
      if (!audioElement) return;
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
        if (isReset) audioElement.currentTime = 0;
      }

      audioElement.volume = volume;
    },
    [isPlaying, volume, isReset],
  );

  return <audio ref={audioRef} src={src} loop={loop} />;
}

export default Audio;

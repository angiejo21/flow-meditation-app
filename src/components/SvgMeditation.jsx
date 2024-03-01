import { useSelector } from "react-redux";

function SvgMeditation() {
  const { minutes, seconds } = useSelector((store) => store.timer);
  const { isThemeDark } = useSelector((store) => store.darkMode);

  function colorPercentage() {
    const circleProgression = circlePercentage(seconds);
    if (isThemeDark) {
      if (circleProgression > 80) return "stroke-teal-100";
      if (circleProgression > 70) return "stroke-teal-200";
      if (circleProgression > 60) return "stroke-teal-300";
      if (circleProgression > 50) return "stroke-teal-400";
      if (circleProgression > 40) return "stroke-teal-500";
      if (circleProgression > 30) return "stroke-teal-600";
      if (circleProgression > 20) return "stroke-teal-700";
      if (circleProgression > 10) return "stroke-teal-800";
      if (circleProgression > 0) return "stroke-teal-900";
    } else {
      if (circleProgression > 80) return "stroke-teal-900";
      if (circleProgression > 70) return "stroke-teal-800";
      if (circleProgression > 60) return "stroke-teal-700";
      if (circleProgression > 50) return "stroke-teal-600";
      if (circleProgression > 40) return "stroke-teal-500";
      if (circleProgression > 30) return "stroke-teal-400";
      if (circleProgression > 20) return "stroke-teal-300";
      if (circleProgression > 10) return "stroke-teal-200";
      if (circleProgression > 0) return "stroke-teal-100";
    }
  }

  function circlePercentage(secs) {
    return (secs / (minutes * 60)) * 100;
  }

  return (
    <svg
      className="absolute left-0 top-0 h-full w-full transition-all"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        stroke="transparent"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke=""
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="282"
        strokeDashoffset={`${282 - (282 * circlePercentage(seconds)) / 100}`}
        className={colorPercentage()}
      />
    </svg>
  );
}

export default SvgMeditation;

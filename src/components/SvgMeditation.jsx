import { useSelector } from "react-redux";

function SvgMeditation() {
  const { minutes, seconds } = useSelector((store) => store.timer);

  function circlePercentage(secs) {
    return (secs / (minutes * 60)) * 100;
  }

  return (
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="transparent"
        stroke="green"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="yellow"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="280"
        strokeDashoffset={`${280 - (280 * circlePercentage(seconds)) / 100}`}
      />
    </svg>
  );
}

export default SvgMeditation;

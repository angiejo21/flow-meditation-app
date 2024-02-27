import { Link } from "react-router-dom";
import logoLight from "./../assets/img/light.png";
import logoDark from "./../assets/img/dark.png";
import { useSelector } from "react-redux";

function Logo() {
  const { isDarkModeOn } = useSelector((store) => store.darkMode);
  return (
    <div className="flex items-center p-2">
      <img
        src={isDarkModeOn ? logoDark : logoLight}
        className="w-14"
        alt="Flow logo"
      />
      <p className="font-heading text-2xl text-slate-950">Flow</p>
    </div>
  );
}

export default Logo;

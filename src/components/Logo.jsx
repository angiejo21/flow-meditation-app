import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiFlame } from "react-icons/pi";

function Logo() {
  const { isDarkModeOn } = useSelector((store) => store.darkMode);
  return (
    <Link to='/' className="flex items-center py-2 px-3 rounded-full hover:shadow-sm hover:bg-teal-100 transition-all">
      <PiFlame className="text-2xl mr-1 text-teal-600"/>
      <p className="font-heading text-2xl text-slate-950">Flow</p>
    </Link>
  );
}

export default Logo;

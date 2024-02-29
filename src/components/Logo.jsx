import { Link } from "react-router-dom";
import { PiFlame } from "react-icons/pi";

function Logo() {
  return (
    <Link to='/' className="flex items-center py-2 px-3 rounded-full hover:shadow-sm hover:bg-teal-300 transition-all dark:hover:bg-teal-800">
      <PiFlame className="text-2xl mr-1 text-teal-600"/>
      <p className="font-heading text-2xl text-slate-950 dark:text-teal-100">Flow</p>
    </Link>
  );
}

export default Logo;

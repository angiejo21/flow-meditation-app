import { Link } from "react-router-dom";
import { PiFlame } from "react-icons/pi";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center rounded-full px-3 py-2 transition-all hover:bg-teal-300 hover:shadow-sm dark:hover:bg-teal-800"
    >
      <PiFlame className="mr-1 text-2xl text-teal-600" />
      <p className="font-heading text-2xl text-slate-950 dark:text-teal-100">
        Flow
      </p>
    </Link>
  );
}

export default Logo;

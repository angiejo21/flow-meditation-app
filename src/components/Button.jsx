import { Link } from "react-router-dom";

// import {useNavigate} from 'react'
function Button({ styled, type, pageTo, onClick, children }) {
  const styles = {
    primary:
      "m-1 w-full rounded-full border-2 border-teal-400 bg-teal-400 px-4 py-2 text-center font-semibold uppercase text-teal-950 shadow-md transition-all hover:border-teal-500 hover:bg-teal-500 hover:shadow-sm dark:border-teal-700 dark:bg-teal-700 dark:text-teal-100 dark:hover:border-teal-600 dark:hover:bg-teal-600 sm:m-2 sm:px-5 sm:py-3 sm:text-xl",
    secondary:
      "m-1 rounded-full border-2 border-teal-500 bg-slate-50 px-4 py-2 font-semibold uppercase text-teal-800 shadow-md transition-all hover:border-teal-300 hover:bg-teal-300 hover:shadow-sm dark:bg-slate-900 dark:text-teal-100 dark:hover:border-teal-800 dark:hover:bg-teal-800 sm:m-2 sm:px-5 sm:py-3 sm:text-xl",
    secondarySelected:
      "m-1 rounded-full border-2 border-teal-300 bg-teal-300 px-4 py-2 font-semibold uppercase text-teal-800 shadow-sm transition-all  dark:border-teal-800 dark:bg-teal-800 dark:text-teal-100 sm:m-2 sm:px-5 sm:py-3 sm:text-xl",
    play: "mx-2 my-5 rounded-full border-2 border-teal-400 bg-teal-400 p-5 text-xl text-teal-950 shadow-md transition-all hover:border-teal-500 hover:bg-teal-500 hover:shadow-sm dark:border-teal-700 dark:bg-teal-700 dark:text-teal-100 dark:hover:border-teal-600 dark:hover:bg-teal-600",
    reset:
      "mx-2 my-5 rounded-full border-2 border-lime-500 bg-slate-50 p-5 text-xl text-lime-950 shadow-md transition-all hover:border-lime-400 hover:bg-lime-400 hover:shadow-sm dark:border-lime-800 dark:bg-slate-950  dark:text-lime-100 dark:hover:bg-lime-800",
    header:
      "m-1 rounded-full p-3 text-2xl text-slate-950 transition-all hover:bg-teal-300 hover:shadow-sm dark:text-teal-100 dark:hover:bg-teal-800",
    sound:
      "my-1 rounded-full border-2 border-teal-500 bg-slate-50 p-3 text-2xl text-teal-800 transition-all hover:border-teal-300 hover:bg-teal-300 dark:bg-slate-900 dark:text-teal-100 dark:hover:border-teal-800 dark:hover:bg-teal-800 sm:my-2 sm:p-4 sm:text-4xl md:my-4",
    soundOn:
      "my-1 rounded-full border-2 border-teal-300 bg-teal-300 p-3 text-2xl text-teal-800 transition-all dark:border-teal-800 dark:bg-teal-800 dark:text-teal-100 dark:hover:bg-teal-950 sm:my-2 sm:p-4 sm:text-4xl md:my-4",
    inputNumberPlus:
      "absolute right-1 top-1/2 w-14 -translate-y-1/2 transform rounded-full bg-teal-400 text-2xl text-teal-950 hover:bg-teal-500 dark:bg-teal-700 dark:text-teal-100 dark:hover:bg-teal-600",
    inputNumberMinus:
      "absolute left-1 top-1/2 w-14 -translate-y-1/2 transform rounded-full bg-teal-400 text-2xl text-teal-950 hover:bg-teal-500 dark:bg-teal-700 dark:text-teal-100 dark:hover:bg-teal-600",
    inputNumber:
      "m-1 w-full rounded-full border-2 border-teal-500 bg-slate-50 py-2 font-semibold uppercase text-teal-800 shadow-md transition-all hover:border-teal-300 hover:bg-teal-300 hover:shadow-sm dark:bg-slate-900 dark:text-teal-100 dark:hover:border-teal-800 dark:hover:bg-teal-800 sm:m-2 sm:py-3 sm:text-xl md:py-2",
  };

  function handleClick(e) {
    e.preventDefault();
    onClick();
  }

  if (type === "link")
    return (
      <Link to={pageTo} className={styles[styled]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[styled]} onClick={(e) => handleClick(e)}>
      {children}
    </button>
  );
}

export default Button;

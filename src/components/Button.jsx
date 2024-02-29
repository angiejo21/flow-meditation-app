import { Link } from "react-router-dom";

// import {useNavigate} from 'react'
function Button({ styled, type, pageTo, onClick, children }) {
  const styles = {
    primary:
      "w-full m-1 py-2 px-4 border-2 border-teal-400 bg-teal-400 text-teal-950 uppercase text-center font-semibold rounded-full shadow-md hover:shadow-sm hover:border-teal-500 hover:bg-teal-500 transition-all sm:m-2 sm:py-3 sm:px-5 sm:text-xl dark:bg-teal-700 dark:border-teal-700 dark:text-teal-100 dark:hover:bg-teal-600 dark:hover:border-teal-600",
    secondary:
      "m-1 py-2 px-4 border-2 border-teal-500 bg-slate-50 text-teal-800 uppercase font-semibold rounded-full shadow-md hover:shadow-sm hover:border-teal-300 hover:bg-teal-300 transition-all sm:m-2 sm:py-3 sm:text-xl sm:px-5 dark:bg-slate-900 dark:text-teal-100 dark:hover:bg-teal-800 dark:hover:border-teal-800",
    play: "mx-2 my-5 p-5 border-2 border-teal-400 bg-teal-400 text-xl text-teal-950 rounded-full shadow-md transition-all hover:shadow-sm hover:bg-teal-500 hover:border-teal-500 dark:bg-teal-700 dark:border-teal-700 dark:text-teal-100 dark:hover:bg-teal-600 dark:hover:border-teal-600",
    reset:
      "mx-2 my-5 p-5 border-2 border-lime-500 bg-slate-50 text-xl text-lime-950 rounded-full shadow-md transition-all hover:shadow-sm hover:bg-lime-400 hover:border-lime-400 dark:bg-slate-950 dark:border-lime-800  dark:text-lime-100 dark:hover:bg-lime-800",
    header:
      "text-2xl text-slate-950 p-3 m-1 rounded-full hover:shadow-sm hover:bg-teal-300 transition-all dark:text-teal-100 dark:hover:bg-teal-800",
    sound:
      "my-1 p-3 border-2 border-teal-500 bg-slate-50 text-2xl text-teal-800 rounded-full transition-all hover:bg-teal-300 hover:border-teal-300 sm:p-4 sm:my-2 sm:text-4xl md:my-4 dark:bg-slate-900 dark:text-teal-100 dark:hover:bg-teal-800 dark:hover:border-teal-800",
    soundOn:
      "my-1 p-3 border-2 border-teal-300 bg-teal-300 text-2xl text-teal-800 rounded-full transition-all sm:p-4 sm:my-2 sm:text-4xl md:my-4 dark:border-teal-800 dark:bg-teal-800 dark:text-teal-100 dark:hover:bg-teal-950",
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

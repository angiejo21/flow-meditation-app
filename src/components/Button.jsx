import { Link } from "react-router-dom";

// import {useNavigate} from 'react'
function Button({ styled, type, pageTo, onClick, children }) {
  const styles = {
    primary:
      "w-full m-1 py-2 px-4 border-2 border-teal-500 bg-teal-500 text-teal-950 uppercase text-center font-semibold rounded-full shadow-md hover:shadow-sm hover:border-teal-400 hover:bg-teal-400 transition-all sm:m-2 sm:py-3 sm:px-5 sm:text-xl",
    secondary:
      "m-1 py-2 px-4 border-2 border-teal-500 bg-slate-50 text-teal-800 uppercase font-semibold rounded-full shadow-md hover:shadow-sm hover:border-teal-100 hover:bg-teal-100 transition-all sm:m-2 sm:py-3 sm:text-xl sm:px-5",
    play: "mx-2 my-5 p-5 border-2 border-teal-500 bg-teal-500 text-xl text-teal-950 rounded-full shadow-md transition-all hover:shadow-sm hover:bg-teal-400 hover:border-teal-400",
    reset:
      "mx-2 my-5 p-5 border-2 border-lime-500 bg-slate-50 text-xl text-lime-950 rounded-full shadow-md transition-all hover:shadow-sm hover:bg-lime-400 hover:border-lime-400",
    header:
      "text-2xl text-slate-950 p-3 m-1 rounded-full hover:shadow-sm hover:bg-teal-100 transition-all",
    sound:
      "my-1 p-3 border-2 border-teal-500 bg-slate-50 text-2xl text-teal-800 rounded-full transition-all hover:bg-teal-100 hover:border-teal-100 sm:p-4 sm:my-2 sm:text-4xl md:my-4 ",
    soundOn:
      "my-1 p-3 border-2 border-teal-100 bg-teal-100 text-2xl text-teal-800 rounded-full transition-all sm:p-4 sm:my-2 sm:text-4xl md:my-4",
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

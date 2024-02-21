import { Link } from "react-router-dom";

// import {useNavigate} from 'react'
function Button({ styled, type, pageTo, onClick, children }) {
  const styles = {
    primary:
      "py-3 px-5 bg-teal-500 text-teal-950 border-2 border-teal-500 rounded-full uppercase font-semibold shadow-md hover:shadow-sm hover:bg-teal-600 hover:border-0 transition-all",
    secondary:
      "py-3 px-5 border-2 border-teal-500 text-teal-950 rounded-full uppercase font-semibold shadow-md hover:shadow-sm hover:bg-teal-100 hover:border-0 transition-all",
    control:
      "p-5 rounded-full bg-teal-500 shadow-md hover:shadow-sm hover:bg-teal-600 hover:border-0 transition-all",
    reset:
      "p-5 rounded-full bg-red-500 shadow-md hover:shadow-sm hover:bg-red-600 hover:border-0 transition-all",
  };

  if (type === "link")
    return (
      <Link to={pageTo} className={styles[styled]}>
        {children}
      </Link>
    );

  return (
    <button className={styles[styled]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

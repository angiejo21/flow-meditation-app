import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const exerciseIsSet =
    useSelector((store) => store.meditation?.selectedExercise) || false;
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!exerciseIsSet) navigate("/settings");
    },
    [exerciseIsSet, navigate],
  );
  return exerciseIsSet ? children : null;
}

export default ProtectedRoute;

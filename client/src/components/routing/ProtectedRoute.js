import { Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/Spinner";

const ProtectedRoute = () => {
  return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;

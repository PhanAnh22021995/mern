import { Route, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "react-bootstrap/Spinner";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="info" />
      </div>
    );

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : navigate("/login")}
    />
  );
};

export default ProtectedRoute;

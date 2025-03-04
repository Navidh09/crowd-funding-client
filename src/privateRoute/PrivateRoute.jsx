import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <h2 className="flex items-center justify-center">Loading...</h2>;
  }

  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;

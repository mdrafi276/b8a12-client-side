import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lodding from "./Lodding/Lodding";

const PrivetRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation();
  if (loding) {
    return (
      // <span className="loading loading-spinner text-black bg-black text-center mx-auto mt-10 ml-[630px] loading-lg"></span>
      <Lodding></Lodding>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;

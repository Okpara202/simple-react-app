import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../authentication/auth";

function Protected() {
  // Check if user is logged in

  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to={`/`} />;
  }

  return <Outlet />;
}

export default Protected;

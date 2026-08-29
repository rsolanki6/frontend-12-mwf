import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ authenticated, children }) {
  const location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
}
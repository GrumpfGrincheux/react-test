import { Navigate } from "react-router-dom";

export function AuthenticatedRoute({ children }) {
  const auth = localStorage.getItem("auth");
  return auth === "true" ? children : <Navigate to="/login" replace={true} />;
}

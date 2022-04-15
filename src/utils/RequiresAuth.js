import { Navigate, useLocation } from "react-router-dom";

export function RequiresAuth({ children }) {
    const location = useLocation();
    const token = localStorage.getItem("encodedToken");
    return token ? children : <Navigate to="/login" state={{ from: location }} replace />;
}
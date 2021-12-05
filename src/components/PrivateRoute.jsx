import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-context"

export function PrivateRoute({children}) {
    let { token } = useAuth();

    return token ? children : <Navigate to ="/login"/>
        

    
}
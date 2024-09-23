
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
      const { isAuthenticated } = useAuth();

	return isAuthenticated ?  children  : <Navigate to='/signin' />;
}


export default PrivateRoutes;

import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {

    const { user } = useContext(AuthContext);

    if (!user.AccessToken) {
        return <Navigate to='/login' replace />
    }

    return <Outlet />

};

export default PrivateRoute;
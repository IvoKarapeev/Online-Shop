import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext"

const GuestRoute = () => {

    const { user } = useContext(AuthContext);
    console.log(user);
    
    if(user.AccessToken) {
        return <Navigate to='/logout' replace /> 
    };

    return <Outlet />

};

export default GuestRoute;
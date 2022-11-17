import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({logoutHandler}) => {

    const navigate = useNavigate();

    useEffect(() => {
        logoutHandler();
        navigate('/')
    },[]);

    return null;

};

export default Logout;
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { deleteProduct } from "../../redux/slice/productsSlice";

const DeleteItem = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { itemId } = useParams(); 
    const { user } = useContext(AuthContext);

    useEffect(() => {
        
        const accessToken = user.AccessToken;
        dispatch(deleteProduct({accessToken,itemId}));
        navigate('/');

    },[]);
    
    return null;

};

export default DeleteItem;
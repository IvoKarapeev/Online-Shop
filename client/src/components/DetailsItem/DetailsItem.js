import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { getProducts } from '../../redux/slice/productsSlice';
import { purchaseProduct } from '../../redux/slice/productsSlice';

import styles from './DetailsItem.module.css';

const DetailsItem = () => {

    const [itemDetails,setItemDetails] = useState({
        imageUrl:'',
        name:'',
        price:'',
        description:''
    });

    const [isPurchased,setIsPurchased] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);
    const { itemId } = useParams();
    
    useEffect(() => {
        dispatch(getProducts());
    },[]);
    
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        if (products) {

            for (const item of products) {
                if (item.customers.includes(user._id)) {
                    setIsPurchased(true);
                    break;
                }
            };

            const item = products.filter(el => el._id === itemId);

            if (item.isPurchased) {
                setIsPurchased(true);
                setItemDetails(item[0]);
            }else{
                setItemDetails(item[0]);
            };
            
        }
    },[products]);

    const navigateBack = () => {
        navigate(-1);
    };

    const purchaseItem = (id) => {
        
        const data = {
            accessToken:user.AccessToken,
            itemId:id
        };

        dispatch(purchaseProduct(data));
        setIsPurchased(true);
    };

    return(
        <div className={styles.card}>
            <img src={itemDetails.imageUrl} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{itemDetails.name}</h1>
            <p className={styles.price}>{itemDetails.price}</p>
            <p>
            {itemDetails.description} 
            </p>
            { user._id === itemDetails.creator &&
                <>
                    <p>
                        <button>Edit</button>
                    </p>
                    <p>
                        <button>Delete</button>
                    </p> 
                </>
            }
            { isPurchased 
                ?
                <>
                    <p>
                     <button onClick={() => navigateBack()}>This item is not available!</button>
                    </p>
                </>
                : user._id !== itemDetails.creator &&
                <>
                    <p>
                        <button onClick={() => purchaseItem(itemDetails._id)}>Purchase</button>
                    </p>
                </>
            }
      </div>
    )
};

export default DetailsItem;
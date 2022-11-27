import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { getProducts } from '../../redux/slice/productsSlice';

import styles from './DetailsItem.module.css';

const DetailsItem = () => {

    const [itemDetails,setItemDetails] = useState({
        imageUrl:'',
        name:'',
        price:'',
        description:''
    });

    const dispatch = useDispatch();

    const { user } = useContext(AuthContext);
    const { itemId } = useParams();
    
    useEffect(() => {
        dispatch(getProducts());
    },[]);
    
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        if (products) {
            const item = products.filter(el => el._id === itemId);
            setItemDetails(item[0]);
        }
    },[products]);

    console.log(user._id);
    console.log(itemDetails.creator);
    
    return(
        <div className={styles.card}>
            <img src={itemDetails.imageUrl} alt="Denim Jeans" style={{ width: "100%" }} />
            <h1>{itemDetails.name}</h1>
            <p className={styles.price}>{itemDetails.price}</p>
            <p>
            {itemDetails.description} 
            </p>
            { user._id === itemDetails.creator
                ? 
                <>
                    <p>
                        <button>Edit</button>
                    </p>
                    <p>
                        <button>Delete</button>
                    </p> 
                </>
                :
                <>
                <p>
                    <button>Purchase</button>
                </p>
                </>
            }
      </div>
    )
};

export default DetailsItem;
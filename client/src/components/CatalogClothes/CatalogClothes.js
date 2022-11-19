import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slice/productsSlice';

import styles from './CatalogClothes.module.css';
import CatalogItem from './CatalogItem';

const CatalogClothes = () => {
    
    const dispatch = useDispatch();
    const [clothes,setClothes] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);

    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        if (products) {
            const clothesProducts = products.filter(el => el.category === 'Clothes');

            setClothes(clothesProducts);

        }
    },[products])


    return(
        <div className={styles.box}>
            
            {clothes.length > 0 
                ? clothes.map(item => <CatalogItem key={item._id} item={item}/>)
                :<h1 className={styles['no-items']}>No clothes in the store yet.</h1>}
            
            
        </div>
    )
};

export default CatalogClothes;
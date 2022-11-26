import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { getProducts } from '../../redux/slice/productsSlice';

import CatalogItem from '../CatalogClothes/CatalogItem';

import styles from './CatalogAccessories.module.css';

const CatalogAccessories = () => {

    const dispatch = useDispatch();
    const [accessories,setAccessories] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
    },[]);

    const products = useSelector((state) => state.products.products);

    useEffect(() => {

        if (products) {
            const accessoriesItems = products.filter(item => item.category === 'Accessories');
            
            setAccessories(accessoriesItems);
        }

    },[products]);


    return(
        <div className={styles.box}>
            
            {accessories.length > 0
                ? accessories.map(item => <CatalogItem key={item._id} item={item}/>)
                :<h1 className={styles['no-items']}>No accessories in the store yet.</h1>
            }

        </div>
    )
};

export default CatalogAccessories;
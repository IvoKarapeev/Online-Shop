import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slice/productsSlice';

import CatalogItem from '../CatalogClothes/CatalogItem';

import styles from './CatalogShoes.module.css';

const CatalogShoes = () => {

    const dispatch = useDispatch();
    const [shoes,setShoes] = useState([]);

    useEffect(() => {
        dispatch(getProducts());
    },[]);

    const products = useSelector((state) => state.products.products);

    useEffect(() => {

        if(products){
            const shoesProducts = products.filter(product => product.category === 'Shoes');

            setShoes(shoesProducts);
        }

    },[products]);


    return(
        <div className={styles.box}>

            {shoes.length > 0
                ? shoes.map(item => <CatalogItem key={item._id} item={item}/>)
                :<h1 className={styles['no-items']}>No shoes in the store yet.</h1>
            }

        </div>
    )
};

export default CatalogShoes;
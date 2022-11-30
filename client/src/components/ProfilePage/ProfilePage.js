import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getProducts } from '../../redux/slice/productsSlice';
import { AuthContext } from '../../contexts/AuthContext';

import styles from '../CatalogClothes/CatalogClothes.module.css'
import CatalogItem from '../CatalogClothes/CatalogItem';

const ProfilePage = () => {

    const [soldItems,setSoldItems] = useState([]);

    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);
 
    useEffect(() => {
        dispatch(getProducts());
    },[]);

    const products = useSelector((state) => state.products.products);
    
    useEffect(() => {
        
        setSoldItems([]);
        if (products) {
            products.forEach(element => {
                if (element.creator === user._id) {
                    setSoldItems(state => [...state,element]);
                };
            });
        }

    },[products])



    return(
        
        <>
            <section className={styles["title-card"]}>
                <h1>Welcome to your profile!</h1>
                <div>Here you can find all the items you are selling!</div>
                <h3>Thank you,for using our shop for selling and shoping online!</h3>
            </section>

            <div className={styles.box}>
                    
                {soldItems.length > 0 
                    ? soldItems.map(item => <CatalogItem key={item._id} item={item}/>)
                    :<h1 className={styles['no-items']}>No clothes in the store yet.</h1>}
                
            </div>

        </>
    )
};

export default ProfilePage;
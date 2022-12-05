import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {

    const navigate = useNavigate();

    const onClick = (to) => {

        if (to === 'clothes') {
            navigate('/catalog/clothes');        
        } else if (to === 'shoes') {
            navigate('/catalog/shoes');        
        } else {
            navigate('/catalog/accessories');        
        };

    }

    return (
        <div>
            <button className={styles['btn-clothes']} onClick={() => onClick('clothes')}></button>
            <p className={styles.clothes}>Clothes</p>
            <button className={styles['btn-shoes']} onClick={() => onClick('shoes')}></button>
            <p className={styles.shoes}>Shoes</p>
            <button className={styles['btn-accessories']} onClick={() => onClick('accessories')}></button>
            <p className={styles.accessories}>Accessories</p>
        </div>
    )

};

export default HomePage;
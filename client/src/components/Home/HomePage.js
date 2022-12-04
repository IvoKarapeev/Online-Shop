import { useNavigate } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {

    const navigate = useNavigate();

    const onClick = (to) => {
        if (to === 'clothes') {
            navigate('/catalog/clothes');
        }else if (to === 'shoes') {
            navigate('/catalog/shoes');
        }else if (to === 'accessories') {
            navigate('/catalog/accessories');
        }else{
            navigate('/procuts/sell');
        }
    };

    return (
        <div>
            <div className={styles['page-image']}>
            </div>
            <button className={styles['btn-clothes']} onClick={() => onClick('clothes')}>You want to buy clothes that are exactly in your style, click here</button>
            <button className={styles['btn-shoes']} onClick={() => onClick('shoes')}>You want to buy shoes with which you feel comfortable, click here</button>
            <button className={styles['btn-accessories']} onClick={() => onClick('accessories')}>You want to buy accessories for you or your loved one, click here</button>
            <button className={styles['btn-sell']} onClick={() => onClick('sell')}>You want to sell your item, click here</button>
        </div>
    )

};

export default HomePage;
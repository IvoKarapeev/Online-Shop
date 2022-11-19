import styles from './CatalogClothes.module.css';
import { Link } from 'react-router-dom';

const CatalogItem = ({item}) => {
    return (
        <div className={styles.card}>
                <div className={styles.imgBx}>
                    <img
                    src={item.imageUrl}
                    alt="images"
                    />
                </div>
                <div className={styles.details}>
                    <h2>
                    {item.name}
                    <br />
                    <span>{item.category}</span>
                    <button className={styles["details-btn"]}><Link to={`/product/details/${item._id}`}>Details</Link></button>
                    </h2>
                </div>
            </div>
    )
};

export default CatalogItem;
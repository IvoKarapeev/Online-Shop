import styles from './CatalogClothes.module.css';

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
                    </h2>
                </div>
            </div>
    )
};

export default CatalogItem;
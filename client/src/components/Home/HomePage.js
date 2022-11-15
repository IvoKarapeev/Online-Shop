import styles from './HomePage.module.css';

const HomePage = () => {

    return (
        <div className={styles.background}>
            <div className={styles['page-image']}>
            </div>
            <button className={styles['btn-clothes']}>You want to buy clothes that are exactly in your style, click here</button>
            <button className={styles['btn-shoes']}>You want to buy shoes with which you feel comfortable, click here</button>
            <button className={styles['btn-accessories']}>You want to buy accessories for you or your loved one, click here</button>
            <button className={styles['btn-sell']}>You want to sell your item, click here</button>
        </div>
    )

};

export default HomePage;
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav className={styles.navbar}>
                {/* <img src="/images/logo.png" alt="" className={styles.logo} /> */}
                <hr />
                <ul className={styles['nav-links']}>
                    <div className={styles.menu}>
                        <p>
                            <Link to='/'>Home</Link>
                        </p>
                        <p>
                            <Link to='/register'>Login</Link>
                        </p>
                        <p>
                            <Link to='/register'>Register</Link>
                        </p>
                        <p className={styles.services}>
                            <a href="/">Services</a>
                            <ul className={styles.dropdown}>
                                <p>
                                <Link to="/">Clothes</Link>
                                </p>
                                <p>
                                <Link to="/">Shoes</Link>
                                </p>
                                <p>
                                <Link to="/">Accessories</Link>
                                </p>
                            </ul>
                        </p>
                        <p>
                            <Link to='/register'>Logout</Link>
                        </p>
                        <p>
                            <Link to='/register'>Create Item</Link>
                        </p>
                    </div>
                </ul>
            </nav>
        </div>
       
      
    )

};

export default Header;
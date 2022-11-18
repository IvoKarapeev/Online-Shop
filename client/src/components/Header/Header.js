import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {

    const {user} = useContext(AuthContext);
    console.log(user.AccessToken);

    return (
            <nav className={styles.navbar}>
                {/* <img src="/images/logo.png" alt="" className={styles.logo} /> */}
                <hr />
                <ul className={styles['nav-links']}>
                    <div className={styles.menu}>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className={styles.services}>
                            <a href="/">Shop</a>
                            <ul className={styles.dropdown}>
                                <div>
                                <Link to="/">Clothes</Link>
                                </div>
                                <div>
                                <Link to="/">Shoes</Link>
                                </div>
                                <div>
                                <Link to="/">Accessories</Link>
                                </div>
                            </ul>
                        </div>
                        {user.AccessToken
                        ?
                        <>
                            <div>
                            <Link to='/logout'>Logout</Link>
                            </div>
                            <div>
                                <Link to='/register'>Create Item</Link>
                            </div>
                            <div>
                            <Link to='/user/profile'>Profile</Link>
                            </div>
                        </>
                        :
                        <>
                            <div>
                                <Link to='/login'>Login</Link>
                            </div>
                            <div>
                                <Link to='/register'>Register</Link>
                            </div>
                        </>}
                    </div>
                </ul>
            </nav>
      
    )

};

export default Header;
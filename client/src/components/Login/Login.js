import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/slice/productsSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Login.module.css';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector(state => state.products);

    const {setUser} = useContext(AuthContext);

    const [userData,setUserData] = useState({
        username:'',
        password:'',
    });

    const [errors,setErrors] = useState({});

    useEffect(() => {
        const userState = state.find(x => x.hasOwnProperty('user'));
        const errorState = state.find(x => x.hasOwnProperty('error'));
          
        
        if (userState) {
            setUser(userState.user);

            navigate('/');
        };

        if (errorState) {
            setErrors(state => ({
                ...state,
                'loginError': errorState.error,
            })); 
        }

    },[state]);

    const onChange = (e) => {
        setUserData(state => ({
            ...state,
            [e.target.name]:e.target.value
        }));
    };


    const onSubmit = (e) => {
        e.preventDefault();

        if (userData.username.length < 5 ||
            userData.password.length < 6) {
            return ;
        };

        const authData = {
            username:userData.username,
            password:userData.password
        }

        dispatch(loginUser(authData));

        setUserData({
            username:'',
            password:'',
        });

    };

    const minlength = (e,minL) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: userData[e.target.name].length < minL,
        }));
    };

    return (
        <form onSubmit={onSubmit}>
        <div className={styles.container}>
        <h1>Login</h1>
        <p>Please fill in this form to login into your account.</p>
        <hr className={styles.separator}/>
         <label htmlFor="username">
            <b>Username</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter username"
            name="username"
            id="username"
            value={userData.username}
            onChange={onChange}
            onBlur={(e) => minlength(e,5)}
        />
        {errors.username &&
            <div className={styles.validate}>Username should be at least 5 characters long</div>
        }
        <label htmlFor="password">
            <b>Password</b>
        </label>
        <input
            className={styles["input-text"]}
            type="password"
            placeholder="Enter password"
            name="password"
            id="password"
            value={userData.password}
            onChange={onChange}
            onBlur={(e) => minlength(e,6)}
        />
        {errors.password &&
            <div className={styles.validate}>Password should be at least 6 characters long</div>
        }
        {errors.loginError &&
            <div className={styles.validate}>Wrong username or password</div>
        }
        <hr className={styles.separator}/>
        <button type="submit" className={styles.loginbtn}>
            Login
        </button>
        </div>
    </form>
    )
};

export default Login;
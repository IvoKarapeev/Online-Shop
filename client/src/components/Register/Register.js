import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/slice/productsSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './Register.module.css';

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector(state => state.products);

    const [userData,setUserData] = useState({
        name:'',
        username:'',
        password:'',
        repeatPassword:''
    });

    const {setUser} = useContext(AuthContext);

    useEffect(() => {
        const userState = state.find(x => x.hasOwnProperty('user'));
            
        if (userState) {
            setUser(userState.user);

            navigate('/');
        };

    },[state]);

    const [errors,setErrors] = useState({});


    const onChange = (e) => {
        setUserData(state => ({
            ...state,
            [e.target.name]:e.target.value
        }));
    };


    const onSubmit = (e) => {
        e.preventDefault();

        if (userData.name.length < 2 || userData.username.length < 5 ||
            userData.password.length < 6 || userData.password !== userData.repeatPassword) {
            return ;
        };

        const authData = {
            name:userData.name,
            username:userData.username,
            password:userData.password
        }

        dispatch(registerUser(authData));

        setUserData({
            name:'',
            username:'',
            password:'',
            repeatPassword:''
        });

    };

    const minlength = (e,minL) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: userData[e.target.name].length < minL,
        }));
    };

    const equalPasswords = (e) => {
        setErrors(state => ({
            ...state,
            [e.target.name]: userData[e.target.name] !== userData.password
        }));
    };

   


    return (
        <form onSubmit={onSubmit}>
        <div className={styles.container}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr className={styles.separator}/>
        <label htmlFor="name">
            <b>Name</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter Name Here"
            name="name"
            id="name"
            value={userData.name}
            onChange={onChange}
            onBlur={(e) => minlength(e,2)}
        />
        {errors.name &&
            <div className={styles.validate}>Name should be at least 2 characters long</div>
        }
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
        <label htmlFor="repeatPassword">
            <b>Repeat Password</b>
        </label>
        <input
            className={styles["input-text"]}
            type="password"
            placeholder="Enter Password"
            name="repeatPassword"
            id="repeatPassword"
            value={userData.repeatPassword}
            onChange={onChange}
            onBlur={(e) => equalPasswords(e)}
        />
        {errors.repeatPassword &&
            <div className={styles.validate}>Passwords must be equal</div>
        }
        <hr className={styles.separator}/>
        <button type="submit" className={styles.registerbtn}>
            Register
        </button>
        </div>
    </form>
    )
};

export default Register;
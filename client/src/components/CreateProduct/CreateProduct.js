import { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postProduct } from '../../redux/slice/productsSlice';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

import styles from './CreateProduct.module.css';

const CreateProduct = () => {

    const dispatch = useDispatch();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [productData,setProductData] = useState({
        name:'',
        description:'',
        imageUrl:'',
        category:''
    });

    const [errors,setErrors] = useState({});

    const onChange = (e) => {
        setProductData(state => ({
            ...state,
            [e.target.name]:e.target.value
        }))
    };

    const minLength = (e,minLength) => {
        setErrors(state => ({
            ...state,
            [e.target.name]:productData[e.target.name].length < minLength
        }))
    };

    const isImage = (e) => {
        if (!e.target.value.startsWith('http')) {
            setErrors(state => ({
                ...state,
                [e.target.name]:true
            }))
        }else{
            setErrors(state => ({
                ...state,
                [e.target.name]:false
            }))  
        }
    };


    const categoryValidator = (e) => {
        if (e.target.value !== 'Clothes' && e.target.value !== 'Shoes' 
        && e.target.value !== 'Accessories') {
            setErrors(state => ({
                ...state,
                [e.target.name]:true
            }));
        }else{
            setErrors(state => ({
                ...state,
                [e.target.name]:false
            }));
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (errors.name || errors.description || errors.imageUrl || errors.category
            || user.AccessToken === undefined) {
            return ; 
        }

        const postData = {
            productData,
            AccessToken:user.AccessToken
        }
        dispatch(postProduct(postData));

        let navigationCategory = productData.category;
        
        setProductData({
            name:'',
            description:'',
            imageUrl:'',
            category:''
        });

        navigate(`/catalog/${navigationCategory}`)
    };

    return (
        <form onSubmit={onSubmit}>
        <div className={styles.container}>
        <h1>Sell Product</h1>
        <p>Please fill in this form to sell the item you want.</p>
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
            value={productData.name}
            onChange={onChange}
            onBlur={(e) => minLength(e,3)}
        />
        {errors.name &&
            <div className={styles.validate}>Name should be at least 3 characters long</div>
        }
         <label htmlFor="Description">
            <b>Description</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter description"
            name="description"
            id="description"
            value={productData.description}
            onChange={onChange}
            onBlur={(e) => minLength(e,10)}
        />
        {errors.description &&
            <div className={styles.validate}>description should be at least 10 characters long</div>
        }
        <label htmlFor="Image">
            <b>Image</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter imageUrl"
            name="imageUrl"
            id="imageUrl"
            value={productData.imageUrl}
            onChange={onChange}
            onBlur={(e) => isImage(e)}
        />
        {errors.imageUrl &&
            <div className={styles.validate}>Image shoud starts with http/https</div>
        }
        <label htmlFor="category">
            <b>Category</b>
        </label>
        <input
            className={styles["input-text"]}
            type="text"
            placeholder="Enter category"
            name="category"
            id="category"
            value={productData.category}
            onChange={onChange}
            onBlur={(e) => categoryValidator(e)}
        />
        {errors.category &&
            <div className={styles.validate}>Category must be Clothes,Shoes or Accessories</div>
        }
        <hr className={styles.separator}/>
        <button type="submit" className={styles['sell-btn']}>
            Sell Item
        </button>
        </div>
    </form>
    )
};

export default CreateProduct;
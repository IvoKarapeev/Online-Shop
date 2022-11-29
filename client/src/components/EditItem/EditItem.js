import { useContext, useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import productsSlice, { editProduct, getProducts } from '../../redux/slice/productsSlice';

import styles from './EditItem.module.css';

const EditItem = () => {

    const [productData,setProductData] = useState({
        name:'',
        description:'',
        price:'',
        imageUrl:'',
        category:''
    });

    const [errors,setErrors] = useState({});

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { itemId } = useParams();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        dispatch(getProducts());
    },[]);

    const products = useSelector((state) => state.products.products);
    
    useEffect(() => {

        if (products) {
            const item = products.filter(el => el._id === itemId);
            setProductData(item[0]);
        }

    },[products]);


    const onChange = (e) => {
        setProductData(state => ({
            ...state,
            [e.target.name]:e.target.value
        }));
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

    const priceValidator = (e) => {
        if(e.target.value <= 0) {
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

    const onEdit = (e) => {
        e.preventDefault();

        const accessToken = user.AccessToken;

        if(errors.name || errors.description || errors.price || errors.imageUrl || errors.category){

            return ;
            
        }else{
            dispatch(editProduct({accessToken,itemId,productData}));

            navigate(`/product/details/${itemId}`);
        };

    }

    return(
        <form onSubmit={onEdit}>
        <div className={styles.container}>
        <h1>Edit Product</h1>
        <p>Please fill in this form to edit the item you are selling.</p>
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
         <label htmlFor="Price">
            <b>Price</b>
        </label>
        <input
            className={styles["input-text"]}
            type="number"
            placeholder="Enter price"
            name="price"
            id="price"
            value={productData.price}
            onChange={onChange}
            onBlur={(e) => priceValidator(e)}
        />
        {errors.price &&
            <div className={styles.validate}>Price shoud be bigger the 0</div>
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
        <button type="submit" className={styles['edit-btn']}>
            Edit Item
        </button>
        </div>
    </form>
    )
};

export default EditItem;
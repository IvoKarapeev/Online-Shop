import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/slice/productsSlice';

const CatalogPage = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    },[dispatch]);

    const products = useSelector((state) => state.products);

};

export default CatalogPage;
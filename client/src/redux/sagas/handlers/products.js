import { call,put } from 'redux-saga/effects';
import { setProducts } from '../../slice/productsSlice';
import { requestGetProducts,requestPostProduct } from '../requests/products';


export function* getProductsHandler(action) {
    try {
        const products = yield call(requestGetProducts);
        yield put(setProducts(products));

    } catch (error) {
        console.log(error);        
    }
};

export function* postProductHandler(action) {
    try {
      
        const data = action.payload; 
        yield call(requestPostProduct,data);
        const products = yield call(requestGetProducts);
        yield put(setProducts(products));

    } catch (error) {
        console.log(error);        
    }
};
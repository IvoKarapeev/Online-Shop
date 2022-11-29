import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        getProducts() {},
        setProducts(state, action) {
            const productsData = action.payload;

            const newState = state.filter(el => !el.hasOwnProperty('products'));
            newState.products = productsData;
            return newState;
        },
        registerUser() {},
        setUserState(state, action) {

            const userState = {user:action.payload}
            const newState = [...state,userState];

            return newState;
        },
        loginUser() {},
        setErrorState(state, action) {
            const errorState = {error:action.payload}
            const newState = [...state,errorState];

            return newState;

        },
        clearUserState(state,action) {
        
            return state.filter(el => !el.hasOwnProperty('user'));
        },
        postProduct() {},
        purchaseProduct() {},
        editProduct() {},
        deleteProduct() {}
       
    }
});

export const { getProducts,setProducts,registerUser,setUserState,loginUser,setErrorState,clearUserState,postProduct,purchaseProduct,editProduct,deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;

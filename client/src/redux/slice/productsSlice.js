import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        getProducts() {},
        setProducts(state, action) {
            const productsData = action.payload;

            return [...state,{'products':productsData}]
        },
        registerUser() {},
        setUserState(state, action) {

            const userState = {user:action.payload}
            const newState = [...state,userState];

            return newState;
        },
        loginUser() {},
        setErrorAuth(state, action) {
            const errorState = {error:action.payload}
            const newState = [...state,errorState];

            return newState;

        }
    }
});

export const { getProducts,setProducts,registerUser,setUserState,loginUser,setErrorAuth } = productsSlice.actions;

export default productsSlice.reducer;

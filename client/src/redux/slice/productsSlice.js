import { createSlice,current } from '@reduxjs/toolkit';

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

        },
        clearUserState(state,action) {
        
            return state.filter(el => !el.hasOwnProperty('user'));
        }
    }
});

export const { getProducts,setProducts,registerUser,setUserState,loginUser,setErrorAuth,clearUserState } = productsSlice.actions;

export default productsSlice.reducer;

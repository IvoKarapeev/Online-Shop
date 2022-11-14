import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        getProducts() {},
        setProducts(state, action) {
            const productsData = action.payload;

            return productsData;
        }
    }
});

export const { getProducts,setProducts } = productsSlice.actions;

export default productsSlice.reducer;

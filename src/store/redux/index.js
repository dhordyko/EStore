import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slice-products'
import blogSlice from './slice-blog-category';

const store = configureStore({
    reducer: {
        blog: blogSlice.reducer,
        products: productsSlice.reducer
    },
});

export default store;
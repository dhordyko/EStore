
import { createSlice } from '@reduxjs/toolkit';
import { fetchBlogData } from './slice-http';
const blogSlice = createSlice({
    name: 'blog',
    initialState: {
        items: [],
        changed: false,
        blogList: []
    },
    reducers: {
        sortBlogList(state, action) {

            state.items = action.payload.items;
            state.blogList = action.payload.items;
        },
        sortBlogListByCategory(state, action) {
            state.items = action.payload;


        }


    },
});

export const blogActions = blogSlice.actions;

export default blogSlice;


import { blogActions } from './slice-blog-category'
import { useEffect, useState } from 'react'
import { dbBlogs } from "../../firebase"
export const fetchBlogData = () => {
    return async (dispatch) => {
        try {
            dbBlogs.once('value').then((snapshot) => { return snapshot.val() ? snapshot.val() : new Error('Request failed') })
                .then((data) => {
                    dispatch(
                        blogActions.sortBlogList({
                            items: Object.entries(data) || [],
                        }));
                })
        } catch (error) {
            console.log(error);
        }
    };
};
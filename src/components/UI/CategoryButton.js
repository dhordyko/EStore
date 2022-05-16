import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { blogActions } from '../../store/redux/slice-blog-category';
import classes from './CategoryButton.module.css'
import { fetchBlogData } from '../../store/redux/slice-http';
const CategoryButton = (props) => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.blog.blogList)
    const dataHandler = () => {
        const data = list.filter(item => item[1].categories.includes(props.category.toLowerCase()));
        dispatch(blogActions.sortBlogListByCategory(data))
    }
    return (
        <React.Fragment><a className={`mb-3 ${classes.button}`} onClick={dataHandler}>{props.category}</a></React.Fragment>
    )
}
export default CategoryButton
import { PortableWifiOffSharp } from '@mui/icons-material';
import React from 'react';
import classes from './BlogItem.module.css'
const BlogItem = (props) => {
    return (
        <React.Fragment>
            <div className={classes.blog_container} >
                <div className={classes.badge_container}>{props.categories.map(item => <span className={`mb-3 ${classes.badge}`}>{item}</span>)}</div>
                <span >{ }</span>
                <img src={props.image} style={{ width: '100%', height: '400px' }} />
                <div className="my-5">
                    <h5 className={classes.title}>{props.title}</h5>
                    <p className={classes.text}>{props.text}</p>
                </div>
            </div>
        </React.Fragment >
    )
}
export default BlogItem
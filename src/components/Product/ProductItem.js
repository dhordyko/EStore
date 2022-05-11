import React, { Fragment, useContext, useState, useEffect } from 'react';
import cartItem from '../../assets/img/cart.png';
import classes from './ProductItem.module.css';
import cartContext from '../../store/CartContext';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
    const cartCtx = useContext(cartContext);
    const [mouseHover, setMouseHover] = useState(false);
    const [itemAddedToCart, setitemAddedToCart] = useState(false);
    useEffect(() => {
        let existingItemIndex = cartCtx.items.filter((item) => item.id === props.id);
        existingItemIndex.length != 0 ? setitemAddedToCart(true) : setitemAddedToCart(false)

    }, [cartCtx.items])
    const onAdditemsHandler = () => {

        cartCtx.addItem({
            id: props.id,
            title: props.title,
            price: props.price,
            description: props.description,
            promotion: props.promotion,
            promotion_color: props.promotion_color,
            image: props.imageSrc
        })

    }
    const mouseOverHandler = () => {
        setMouseHover(true);
    }
    const mouseOutHandler = () => {
        setMouseHover(false);
    }

    return (
        <Fragment>
            <div className={`${classes.product_outer_container} my-5`}>

                <div className={classes.img_container} style={{ backgroundImage: `url(${props.imageSrc})` }} onMouseOver={mouseOverHandler} onMouseOut={mouseOutHandler}>
                    <span style={props.promotion ? { background: `${props.promotion_color}` } : { background: 'none' }} className={props.promotion ? classes.badge : ''}>{props.promotion}</span>
                    <div className={`${classes.overlay} ${mouseHover ? 'd-flex' : 'd-none'}`} >
                        <a onClick={onAdditemsHandler} style={{ background: `${itemAddedToCart ? '#679267' : '#E1CDB9'}` }}><span className='me-3'><img src={cartItem} alt="" /></span>{itemAddedToCart ? 'jest dodany' : 'do koszyka'}</a>
                    </div>
                </div>
                <div className={classes.product_description} >
                    <Link to={`/products/${props.category}/${props.id}`} onClick={props.state}>
                        <div className={classes.product_desc1}>
                            <span>{props.title}</span>
                            <span>{props.price}</span>
                        </div>
                        <div className={classes.product_2}>
                            <p>{props.description}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </Fragment >
    )
}
export default ProductItem;
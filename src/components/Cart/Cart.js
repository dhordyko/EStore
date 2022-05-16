import React, { Fragment, useContext } from "react";
import CartModal from './CartModal';
import classes from './Cart.module.css';
import Button from '@mui/material/Button';
import cartContext from '../../store/CartContext';
import CartItem from './CartItem'
const Cart = (props) => {
    const cartCtx = useContext(cartContext);
    const cartItems = (
        <ul className={`${classes.cart_list_container} ${cartCtx.items.length > 0 ? 'pt-5 d-block' : 'pt-0 d-flex'}`}>
            {cartCtx.items.length > 0 && cartCtx.items.map((item) => (

                < li >
                    <CartItem
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        promotion={item.promotion}
                        promotion_color={item.promotion_color}
                        image={item.image}
                        amount={item.amount}
                    />
                </li>
            ))
            }
            {cartCtx.items.length === 0 && <h1 className={classes.cart_text}>Twój koszyk jest pusty</h1>}
        </ul >
    )

    return (
        <Fragment>
            <CartModal onClose={props.closeCart} className={`${classes.cart_container}`}>
                {cartItems}
                <div className={classes.total_amount_container}>
                    <h3 className="mb-4">Podsumowanie</h3>
                    <div className={`${classes.inner_container}`}>
                        <div className="d-flex justify-content-between w-100 mb-5">
                            <p>Wartość produktów: </p>
                            <span>{`${cartCtx.totalAmount} zł`}</span>
                        </div>
                    </div>
                    <div className={`mt-5 pt-3 d-flex flex-sm-row flex-column justify-content-end ${classes.btn_container}`}>
                        <Button variant="text" href="#" onClick={props.closeCart} className={`me-5 ${classes.btnClose}`}>Wróć do sklepu</Button>
                        <Button href="#" className={`${classes.btnReturn} m-sm-0 mt-2`}>Przejdż do kasy</Button>
                    </div>
                </div>
            </CartModal>

        </Fragment >
    )
}
export default Cart;
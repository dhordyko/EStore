import React, { Fragment, useContext, useState } from "react";
import Input from "../UI/Input"
import cartContext from '../../store/CartContext';
import RemoveBtn from '../Cart/RemoveBtn'
import classes from '../Cart/CartItem.module.css'
const CartItem = (props) => {
    const [itemsAmount, setItemsAmount] = useState(0);
    const cartCtx = useContext(cartContext);
    // const addAmountHandler = (amount) => {
    //     cartCtx.updateItem(props.id, amount);
    // }
    const removeItemHandler = () => {
        cartCtx.removeItem(props.id, itemsAmount, props.price);
    }
    const amountHandler = (v) => {
        setItemsAmount(v);
    }
    return (
        <Fragment>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6"><img src={props.image} width="150px" height="170px" className="img-fluid" /></div>
                    <div className="col-md-6">
                        <div>
                            <div className="product-info-container">
                                <p className={classes.title}>{props.title}</p>
                                <p className="price"><b>{props.price}</b></p>
                                <p className={classes.amount}>Wybrana ilość: {props.amount}</p>
                                <div className="input-container d-flex">
                                    <Input price={props.price} amountHandler={amountHandler} amount={props.amount} />
                                    <RemoveBtn onClick={removeItemHandler} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default CartItem;
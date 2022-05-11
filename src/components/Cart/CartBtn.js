import React, { Fragment, useContext } from "react";
import CartIcon from './CartIcon';
import Button from '@mui/material/Button';
import cartContext from '../../store/CartContext';
import styled from 'styled-components'
const CartBadge = styled.span`
&{
    background:black;
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 20px;
    color: white;
    font-weight: 600;
    position: absolute;
    right: 5px;
    bottom: 0;
}


`;
const CartBtn = (props) => {
    const cartCtx = useContext(cartContext);
    return (
        <Button variant="text" onClick={props.showCart}><CartIcon /><CartBadge>{cartCtx.itemsAmount}</CartBadge></Button>

    )
}
export default CartBtn;
import classes from './Input.module.css';
import React, { useState, useContext, useEffect } from 'react'
import { getThemeProps } from '@mui/system';
import cartContext from '../../store/CartContext';
import styled from 'styled-components'
const TextInput = ({ onChange, value }) => {

    // When value changes, you can do whatever you want or just to trigger the onChange function
    useEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <input
            onChange={onChange}
            value={value}
            style={{ width: '40px' }}
            className="text-center border border-white"
        />
    );
};
const Input = (props) => {
    const cartCtx = useContext(cartContext);

    console.log(props.amount)
    let [value, setValue] = useState(props.amountNumber ? props.amountNumber : 1);
    const CartBtn = styled.button`
    &{
        border: none;
    font-size: 22px;
    background: none;
    }
    
    `
    function addValue() {
        if (value == 30) {
            return
        }
        value = value + 1;
        setValue(value);

        cartCtx.updateTotalAmountADD(props.price, value)
    }
    function removeValue() {
        if (value <= 1) {
            return
        }
        value = value - 1;
        setValue(value)

        cartCtx.updateTotalAmountREMOVE(props.price, value)
    }

    return (
        <div className='d-flex'>
            <CartBtn onClick={addValue}>+</CartBtn>
            <TextInput value={value} type="text" name="amount" onChange={(v) => { props.amountHandler(v) }} />
            <CartBtn onClick={removeValue}>-</CartBtn>
        </div>
    )
}


export default Input;

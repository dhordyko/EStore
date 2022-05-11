import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    itemsAmount: 0,
    singleItemAmount: 0,
    productImage: '',
    addItem: (item) => { },
    removeItem: (id, amount, price) => { },
    updateItem: (id, amount) => { },
    updateTotalAmountADD: (price, amount) => { },
    updateTotalAmountREMOVE: (price, amount) => { },
});

export default CartContext;
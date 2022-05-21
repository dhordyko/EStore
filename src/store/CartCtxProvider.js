import { ConnectingAirportsOutlined } from '@mui/icons-material';
import { useReducer } from 'react';
import CartCotext from './CartContext';
const defaultCartState = {
    items: [],
    totalAmount: 0,
    itemsAmount: 0,
    singleItemAmount: 0,
    itemAddedToCart: false,
    renderProducts: false
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        let items = state.items.concat(action.item);
        let total = state.totalAmount + parseInt(action.item.price);
        let itemsAmount = action.item.amount ? state.itemsAmount + action.item.amount : state.itemsAmount + 1;
        return {
            items: items,
            totalAmount: total,
            itemsAmount: itemsAmount
        }
    }
    // if (action.type === 'UPDATE') {
    //     const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
    //     let existingItem = state.items[existingItemIndex];
    //     const updatedItem = { ...existingItem, amount: action.amount }
    //     state.items[existingItemIndex] = updatedItem;
    //     const updatedItemsArray = [...state.items]
    //     return {
    //         items: updatedItemsArray,
    //         totalAmount: state.totalAmount
    //     }
    // }
    if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
        let existingItem = state.items[existingItemIndex];
        let updatedItems = state.items.filter((item) => { return item.id !== action.id })
        let updatedTotalAmount = state.totalAmount - parseInt(existingItem.price) * action.amount;
        let itemsAmount = state.itemsAmount - action.amount;
        state.itemAddedToCart = false;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
            itemsAmount: itemsAmount,
            itemAddedToCart: state.itemAddedToCart

        }
    }
    if (action.type === 'TOTALADD') {
        let result = state.totalAmount + parseInt(action.price);
        let itemsAmount = state.itemsAmount + 1;
        return {
            items: state.items,
            totalAmount: result,
            itemsAmount: itemsAmount
        }
    }
    if (action.type === 'TOTALREMOVE') {
        let result = state.totalAmount - parseInt(action.price);
        let itemsAmount = state.itemsAmount - 1;
        return {
            items: state.items,
            totalAmount: result,
            itemsAmount: itemsAmount
        }
    }

}
const CartCtxProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemToCartHandler = (item) => {
        if (cartState.items.some(e => e.id == item.id)) {
            return;
        }
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id, amount, price) => {
        dispatchCartAction({ type: 'REMOVE', id: id, price: price, amount: amount });
    };
    // const updateItemFromCartHandler = (id, amount) => {
    //     dispatchCartAction({ type: 'UPDATE', id: id, amount: amount });
    // };
    const totalAmountAddHandler = (price, amount) => {
        dispatchCartAction({ type: 'TOTALADD', price: price, amount: amount });
    };
    const totalAmountRemoveHandler = (price, amount) => {
        dispatchCartAction({ type: 'TOTALREMOVE', price: price, amount: amount });
    };

    const cartContext = {
        items: cartState.items,
        singleItemAmount: cartState.singleItemAmount,
        itemsAmount: cartState.itemsAmount,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        // updateItem: updateItemFromCartHandler,
        updateTotalAmountADD: totalAmountAddHandler,
        updateTotalAmountREMOVE: totalAmountRemoveHandler,
        renderProducts: cartState.renderProducts
    }

    return (
        <CartCotext.Provider value={cartContext}>{props.children}</CartCotext.Provider>
    )
}
export default CartCtxProvider;

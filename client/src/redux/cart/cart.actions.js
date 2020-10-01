import {
    ADD_ITEM_TO_CART
} from './cart.types';

export const addItemToCart = (cartItems, cartItemToAdd) => async dispatch => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === cartItemToAdd._id
    );

    if (existingCartItem) {
        let cart = cartItems.map(cartItem =>
            cartItem._id === cartItemToAdd._id
            ? { ...cartItem, quantityBuy: cartItem.quantityBuy + 1}
            : cartItem 
        )
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: cart
        });
    }else {

    const cart2 = [...cartItems, { ...cartItemToAdd, quantityBuy: 1 }];
    dispatch({
        type: ADD_ITEM_TO_CART,
        payload: cart2
    });
    }
}
/*
export const addItemToCart = (cartItems, item) => async dispatch => {
    console.log(cartItems);
    console.log('--------------------------------------------------------------');
    console.log(item);
    if(cartItems.length > 0) {
        console.log('got here!!');
        const existingCartItem = cartItems.find(
            cartItem => cartItem._id === item._id
        );
        if (existingCartItem) {
            let newCartEdited = cartItems.map(cartItem =>
                cartItem._id === item._id
                ? { ...cartItem, quantity: cartItem.quantity + 1}
                : cartItem 
            )
            dispatch({
                type: ADD_ITEM_TO_CART,
                payload: newCartEdited
            });
        } else {
            const addedNewItemToCart = [...cartItems, { ...item, quantity: 1 }];
            dispatch({
                type: ADD_ITEM_TO_CART,
                payload: addedNewItemToCart
            });
        }
    } else {
        dispatch({
            type: ADD_ITEM_TO_CART,
            payload: item
        });
    }
}*/
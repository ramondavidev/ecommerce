import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CLEAR_ITEM_FROM_CART,
    CLEAR_CART
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

export const removeItemFromCart = (cartItems, cartItemToRemove) => async dispatch => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem._id === cartItemToRemove._id
    )

    if(existingCartItem.quantityBuy === 1) {
        const cartUpdated = cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id)
        dispatch({
            type: CLEAR_ITEM_FROM_CART,
            payload: cartUpdated
        });
    }
    else{
        const cartUpdated = cartItems.map(
            cartItem => 
            cartItem._id === cartItemToRemove._id ?
            {...cartItem, quantityBuy: cartItem.quantityBuy - 1 }
            : cartItem
        );
        dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: cartUpdated
        });
    }
    
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => async dispatch => {
        const cartUpdated = cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id)
        dispatch({
            type: CLEAR_ITEM_FROM_CART,
            payload: cartUpdated
        });
}

export const clearCart = () => async dispatch => {
    dispatch({
        type: CLEAR_CART
    });
}
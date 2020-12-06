import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    CLEAR_ITEM_FROM_CART,
    CLEAR_CART
  } from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_ITEM_TO_CART:
        case REMOVE_ITEM_FROM_CART:
        case CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: payload
            };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
};

export default cartReducer;
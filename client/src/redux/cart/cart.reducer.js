import {
    ADD_ITEM_TO_CART
  } from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: payload
            };
        default:
            return state;
    }
};

export default cartReducer;
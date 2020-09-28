import {
    PRODUCT_ERROR,
    GET_PRODUCT_BY_CATEGORY,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS,
  } from './product.types';
  
  const initialState = {
    products: [],
    product: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS:
      case GET_PRODUCT_BY_CATEGORY:
        return {
          ...state,
          products: payload,
          loading: false
        };
      case GET_PRODUCT_BY_ID:
        return {
          ...state,
          product: payload,
          loading: false
        };
      case PRODUCT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      default:
        return state;
    }
  }
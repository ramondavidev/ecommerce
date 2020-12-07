import {
    PRODUCT_ERROR,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCTS,
    GET_PRODUCTS_FOR_MEN,
    GET_PRODUCTS_FOR_WOMEN,
    GET_PRODUCTS_FOR_CHILDREN
  } from './product.types';
  
  const initialState = {
    products: [],
    men: [],
    women: [],
    children: [],
    product: null,
    loading: true,
    error: {}
  };
  
 const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS:
      case GET_PRODUCTS_BY_CATEGORY:
        return {
          ...state,
          products: payload,
          loading: false
        };
        case GET_PRODUCTS_FOR_MEN:
          return {
            ...state,
            men: payload,
            loading: false
          };
          case GET_PRODUCTS_FOR_WOMEN:
        return {
          ...state,
          women: payload,
          loading: false
        };
        case GET_PRODUCTS_FOR_CHILDREN:
        return {
          ...state,
          children: payload,
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

  export default productReducer;
import api from '../../utils/api';

import {
    PRODUCT_ERROR,
    GET_PRODUCTS_BY_CATEGORY,
    GET_PRODUCT_BY_ID,
    GET_PRODUCTS
} from './product.types';

// Get posts
export const getProducts = () => async dispatch => {
  try {
    const res = await api.get('/items');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get posts
export const displayHome = () => async dispatch => {
  try {
    const res = await api.get('/items/display');

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


export const getProductByName = name => async dispatch => {
  try {
    console.log('got here!');
    console.log(name);
    const res = await api.get(`/items/search/${name}`);
    console.log('res');
    console.log(res);
    console.log('res');


    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: 'not found', status: '404' }
    });
  }
};

// Get posts
export const getProductsByCategory = ( category ) => async dispatch => {
    try {
      const form = {
          category
      }
      const res = await api.post('/items/category', form);
  
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Get posts
export const getProductsByGroup = ( productFor, type ) => async dispatch => {
  try {
    const form = {
      productFor
    }
    const res = await api.post('/items/group', form);

    dispatch({
      type: type,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Get post
export const getProductById = id => async dispatch => {
  try {
    const res = await api.get(`/items/${id}`);

    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
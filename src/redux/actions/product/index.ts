import * as types from 'redux/types/product';

/* GET */
export const getAllProducts = () => ({
  type: types.GET_ALL_PRODUCTS,
});

export const getAllProductsSuccess = (payload: any) => ({
  type: types.GET_ALL_PRODUCTS_SUCCESS,
  payload,
});

/* CREATE */

export const addProduct = (payload: any) => ({
  type: types.ADD_PRODUCT,
  payload,
});

export const addProductSuccess = (payload: any) => ({
  type: types.ADD_PRODUCT_SUCCESS,
  payload,
});

export const addProductFailed = (payload: any) => ({
  type: types.ADD_PRODUCT_FAILED,
  payload,
});

/* UPDATE  */
export const updateProduct = (payload: any) => ({
  type: types.UPDATE_PRODUCT,
  payload,
});

export const updateProductSuccess = (payload: any) => ({
  type: types.UPDATE_PRODUCT_SUCCESS,
  payload,
});

export const updateProductFailed = (payload: any) => ({
  type: types.UPDATE_PRODUCT_FAILED,
  payload,
});

/* DELETE */
export const deleteProduct = (payload: any) => ({
  type: types.DELETE_PRODUCT,
  payload,
});

export const deleteProductSuccess = (payload: any) => ({
  type: types.DELETE_PRODUCT_SUCCESS,
  payload,
});

export const deleteProductFailed = (payload: any) => ({
  type: types.DELETE_PRODUCT_FAILED,
  payload,
});

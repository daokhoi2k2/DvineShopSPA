import * as types from "redux/types/product";

export const getAllProducts = () => ({
    type: types.GET_ALL_PRODUCTS
})

export const getAllProductsSuccess = (payload: any) => ({
    type: types.GET_ALL_PRODUCTS_SUCCESS,
    payload
})

export const addProduct = (payload: any) => ({
    type: types.ADD_PRODUCT,
    payload
})

export const addProductSuccess = (payload: any) => ({
    type: types.ADD_PRODUCT_SUCCESS,
    payload
})

export const addProductFailed = (payload: any) => ({
    type: types.ADD_PRODUCT_FAILED,
    payload
})
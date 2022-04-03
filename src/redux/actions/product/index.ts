import * as types from "redux/types/product";

export const getAllProducts = () => ({
    type: types.GET_ALL_PRODUCTS
})

export const getAllProductsSuccess = (payload: any) => ({
    type: types.GET_ALL_PRODUCTS_SUCCESS,
    payload
})

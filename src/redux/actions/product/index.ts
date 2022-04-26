import * as types from 'redux/types/product';

export interface IGetProductListPayload {
  slug: string;
  page: number;
}

/* GET */
export const getAllProducts = () => ({
  type: types.GET_ALL_PRODUCTS,
});

export const getAllProductsSuccess = (payload: any) => ({
  type: types.GET_ALL_PRODUCTS_SUCCESS,
  payload,
});

export const getProductsFeatured = (payload: IGetProductListPayload) => ({
  type: types.GET_PRODUCTS_FEATURED,
  payload,
});

export const getProductsFeaturedSuccess = (payload: any) => ({
  type: types.GET_PRODUCTS_FEATURED_SUCCESS,
  payload,
});

export const getProductsWallet = (payload: IGetProductListPayload) => ({
  type: types.GET_PRODUCTS_WALLET,
  payload,
});

export const getProductsWalletSuccess = (payload: any) => ({
  type: types.GET_PRODUCTS_WALLET_SUCCESS,
  payload,
});

// export const getProductsList = (payload: IGetProductListPayload) => ({
//   type: types.GET_PRODUCTS_LIST,
//   payload
// })

// export const getProductsListSuccess = (payload: any) => ({
//   type: types.GET_PRODUCTS_LIST_SUCCESS,
//   payload
// })

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

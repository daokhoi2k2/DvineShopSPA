import { all, takeLatest } from 'redux-saga/effects';
import {
  addProductSaga,
  deleteProductSaga,
  getProductsFeaturedSaga,
  getAllProductsSaga,
  updateProductSaga,
  getProductsWalletSaga,
} from './product';
import * as types from 'redux/types/product';

export default function* productSaga() {
  yield all([
    takeLatest(types.GET_ALL_PRODUCTS, getAllProductsSaga),
    takeLatest(types.GET_PRODUCTS_FEATURED, getProductsFeaturedSaga),
    takeLatest(types.GET_PRODUCTS_WALLET, getProductsWalletSaga),
    takeLatest(types.ADD_PRODUCT, addProductSaga),
    takeLatest(types.UPDATE_PRODUCT, updateProductSaga),
    takeLatest(types.DELETE_PRODUCT, deleteProductSaga),
  ]);
}

import { all, takeLatest } from 'redux-saga/effects';
import { createOrderSaga, getAllOrderSaga, getUserOrderSaga } from './order';
import * as types from 'redux/types/order';

export default function* categorySaga() {
  yield all([
    takeLatest(types.GET_ALL_ORDER, getAllOrderSaga),
    takeLatest(types.GET_USER_ORDER, getUserOrderSaga),
    takeLatest(types.CREATE_ORDER, createOrderSaga),
  ]);
}

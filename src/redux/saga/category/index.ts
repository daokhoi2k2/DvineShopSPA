import { all, takeLatest } from 'redux-saga/effects';
import { getAllCategoriesSaga } from './category';
import * as types from 'redux/types/category';

export default function* categorySaga() {
  yield all([takeLatest(types.GET_ALL_CATEGORIES, getAllCategoriesSaga)]);
}

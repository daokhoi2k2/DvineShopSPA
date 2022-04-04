import { call, put } from 'redux-saga/effects';
import * as services from 'services/category';
import { getAllCategoriesSuccess } from 'redux/actions/category';

export function* getAllCategoriesSaga(): any {
  const response = yield call(services.getAllCategoryService);
  const result = response?.data;
  if (result) {
    yield put(getAllCategoriesSuccess(result));
  }
}

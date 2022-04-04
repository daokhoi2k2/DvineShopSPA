import { all, takeLatest } from 'redux-saga/effects';
import { loginUserSaga } from './auth';
import * as types from 'redux/types/auth';

export default function* categorySaga() {
  yield all([takeLatest(types.AUTH_LOGIN, loginUserSaga)]);
}

import { all, takeLatest } from 'redux-saga/effects';
import { loginUserSaga, logoutUserSaga } from './auth';
import * as types from 'redux/types/auth';

export default function* categorySaga() {
  yield all([takeLatest(types.AUTH_LOGIN, loginUserSaga)]);
  yield all([takeLatest(types.AUTH_LOGOUT, logoutUserSaga)]);
}

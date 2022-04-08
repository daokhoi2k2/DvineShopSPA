import { all, takeLatest } from 'redux-saga/effects';
import { authRefreshUserSaga, loginUserSaga, logoutUserSaga } from './auth';
import * as types from 'redux/types/auth';

export default function* authSaga() {
  yield all([takeLatest(types.AUTH_LOGIN, loginUserSaga)]);
  yield all([takeLatest(types.AUTH_LOGOUT, logoutUserSaga)]);
  yield all([takeLatest(types.AUTH_REFRESH_USER, authRefreshUserSaga)]);
}

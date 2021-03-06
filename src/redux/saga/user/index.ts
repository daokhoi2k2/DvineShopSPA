import { all, takeLatest } from 'redux-saga/effects';
import { registerUserSaga, updateAvatarSaga, updateUserSaga } from './user';
import * as types from 'redux/types/user';

export default function* userSaga() {
  yield all([takeLatest(types.REGISTER_USER, registerUserSaga)]);
  yield all([takeLatest(types.UPDATE_USER, updateUserSaga)]);
  yield all([takeLatest(types.UPDATE_AVATAR, updateAvatarSaga)]);
}

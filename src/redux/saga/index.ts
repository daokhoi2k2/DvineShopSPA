import { all } from 'redux-saga/effects';
import category from './category';
import auth from './auth';
import user from './user';
import location from './location';

export default function* rootSaga() {
  yield all([category(), auth(), user(), location()]);
}

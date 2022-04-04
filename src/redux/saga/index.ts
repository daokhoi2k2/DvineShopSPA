import { all } from 'redux-saga/effects';
import category from './category';
import auth from './auth';

export default function* rootSaga() {
  yield all([category(), auth()]);
}

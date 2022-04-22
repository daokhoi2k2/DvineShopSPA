import { all, takeLatest } from 'redux-saga/effects';
import { addTagSaga, getAllTagsSaga, updateTagSaga } from './tag';
import * as types from 'redux/types/tag';

export default function* categorySaga() {
  yield all([
    takeLatest(types.GET_ALL_TAGS, getAllTagsSaga),
    takeLatest(types.ADD_TAG, addTagSaga),
    takeLatest(types.UPDATE_TAG, updateTagSaga),
  ]);
}

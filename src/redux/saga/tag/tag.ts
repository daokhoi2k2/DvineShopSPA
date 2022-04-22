import { call, put } from 'redux-saga/effects';
import * as services from 'services/tag';
import { getAllTags, getAllTagsSuccess } from 'redux/actions/tag';
import { toast } from 'react-toastify';
import { setDialogModal } from 'redux/actions/config';

export function* getAllTagsSaga(): any {
  const response = yield call(services.getAllTagsService);
  const result = response?.data;
  if (result) {
    yield put(getAllTagsSuccess(result));
  }
}

export function* addTagSaga({payload}: any): any {
  const response = yield call(services.addTagsService, payload)

  if(response.status === 200) {
    toast.success('Thêm nhãn thành công');
    yield put(getAllTags());
    yield put(
      setDialogModal({
        isOpen: false,
        editField: null,
      })
    );
  }
}
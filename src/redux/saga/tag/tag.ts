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

export function* addTagSaga({ payload }: any): any {
  try {
    const response = yield call(services.addTagService, payload);

    if (response.status === 200) {
      toast.success('Thêm nhãn thành công');
      yield put(getAllTags());
      yield put(
        setDialogModal({
          isOpen: false,
          editField: null,
        })
      );
    } else {
      toast.error("Tên nhãn đã tồn tại");
    }

  } catch (err) {
    console.log(err)
  }
}


export function* updateTagSaga({ payload }: any): any {
  try {
    const response = yield call(services.updateTagService, payload);

    if (response.status === 200) {
      toast.success('Cập nhật nhãn thành công');
      yield put(getAllTags());
      yield put(
        setDialogModal({
          isOpen: false,
          editField: null,
        })
      );
    }

    if(response?.response?.data?.codeName === "DuplicateKey") {
      toast.error("Tên nhãn đã tồn tại");
    }
  } catch (err) {
    toast.error("Có lỗi xảy ra vui lòng liên hệ quản trị viên");
    console.log(err)
  }
}

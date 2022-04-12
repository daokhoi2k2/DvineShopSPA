import { call, put } from 'redux-saga/effects';
import * as services from 'services/product';
import {
  addProductSuccess,
  getAllProducts,
  getAllProductsSuccess,
  updateProductFailed,
} from 'redux/actions/product';
import { toast } from 'react-toastify';
import {
  setDialogModal,
  setProgressPercentUpdateProduct,
} from 'redux/actions/config';

export function* getAllProductsSaga(): any {
  const response = yield call(services.getAllProductsServices);
  const result = response?.data;

  if (result) {
    yield put(getAllProductsSuccess(result));
  }
}

export function* addProductSaga({ payload }: any): any {
  try {
    const response = yield call(services.addProductServices, payload);
    const result = response?.data;

    if (result) {
      yield put(addProductSuccess(result));
      yield put(
        setDialogModal({
          isOpen: false,
          editField: null,
        })
      );
      yield put(getAllProducts());
      yield put(setProgressPercentUpdateProduct(0));
      toast.success('Thêm sản phẩm thành công');
    }
  } catch (err) {
    return err;
  }
}

export function* updateProductSaga({ payload }: any): any {
  try {
    const response = yield call(services.updateProductServices, payload);
    const result = response?.data;

    if (result) {
      // yield put(addProductSuccess(result));
      yield put(
        setDialogModal({
          isOpen: false,
          editField: null,
        })
      );
      yield put(getAllProducts());
      yield put(setProgressPercentUpdateProduct(0));
      toast.success('Cập nhật sản phẩm thành công');
    }

    if(response?.duplicateKeys) {
      yield put(updateProductFailed(response.duplicateKeys))
      toast.error('Đường dẫn sản phẩm không được trùng');
    }

  } catch (err) {
    console.log("Lỗi", err)
    return err;
  }
}

export function* deleteProductSaga({ payload }: any): any {
  try {
    const response = yield call(services.deleteProductServices, payload);
    const result = response?.data;
    if (result) {
      yield put(getAllProducts());
      toast.success('Xóa sản phẩm thành công');
    }
  } catch (err) {

    return err;
  }
}

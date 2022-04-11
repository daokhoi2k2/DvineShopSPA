import { call, put } from 'redux-saga/effects';
import * as services from 'services/product';
import {
  addProductSuccess,
  getAllProducts,
  getAllProductsSuccess,
} from 'redux/actions/product';
import { toast } from 'react-toastify';
import { setDialogModal, setProgressPercentUpdateProduct } from 'redux/actions/config';

export function* getAllProductsSaga(): any {
  const response = yield call(services.getAllProductsServices);
  const result = response?.data;
  
  if (result) {
    yield put(getAllProductsSuccess(result));
  }
}

export function* addProductSaga({payload}: any): any {
  try {
    const response = yield call(services.addProductServices, payload);
    const result = response?.data;

    if (result) {
      yield put(addProductSuccess(result));
      yield put(setDialogModal(false));
      yield put(getAllProducts()); // Sẽ 
      yield put(setProgressPercentUpdateProduct(0));
      toast.success("Thêm sản phẩm thành công");

    }
  } catch (err) {
    return err;
  }
}

import { call, put } from 'redux-saga/effects';
import * as services from 'services/order';
import { getAllOrderSuccess, getUserOrderSuccess } from 'redux/actions/order';
import { toast } from 'react-toastify';
import { clearCart } from 'redux/actions/cart';
import { getUserInfoCurrent } from 'services/auth';
import { authRefreshUser } from 'redux/actions/auth';

export function* getAllOrderSaga(): any {
  const response = yield call(services.getAllOrderServices);
  const result = response?.data;
  
  if (result) {
    yield put(getAllOrderSuccess(result));
  }
}


export function* getUserOrderSaga({payload}: any): any {
  const response = yield call(services.getUserOrderServices, payload);
  const result = response?.data;
  if (result) {
    yield put(getUserOrderSuccess(result));
  }
}


export function* createOrderSaga({payload}: any): any {
  const toastId = toast.loading("Đang thanh toán...");
  const response = yield call(services.addOrderServices, payload);

  if(response.status === 200) {
    toast.update(toastId, {
      isLoading: false,
      type: "success",
      render: "Thanh toán thành công",
      autoClose: 500
    });

    yield put(clearCart())
    yield put(authRefreshUser());
  }
}
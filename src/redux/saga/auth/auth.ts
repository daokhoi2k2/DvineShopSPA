import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import {
  authLoginFailure,
  authLoginSuccess,
  authLogout,
  authLogoutSuccess,
  authRefreshuserSuccess,
} from 'redux/actions/auth';
import { setAuthModalBox } from 'redux/actions/config';
import * as services from 'services/auth';
import Swal from 'sweetalert2';

export function* loginUserSaga({ payload }: any): any {
  try {
    const toastId = toast.loading('Đang đăng nhập');
    const response = yield call(services.loginUserServices, payload);
    const result = response?.data;

    if (response.status === 200) {
      yield put(authLoginSuccess(result));
      Swal.fire('Đăng nhập thành công', '', 'success');
      toast.update(toastId, {
        type: 'success',
        render: 'Đăng nhập thành công',
        isLoading: false,
        autoClose: 500
      });

      yield put(
        setAuthModalBox({
          isShow: false,
        })
      );
    } else {
      yield put(authLoginFailure(result));
      toast.dismiss(toastId)
      Swal.fire(
        'Đăng nhập thất bại',
        'Sai mật khẩu hoặc tài khoản không tồn tại',
        'error'
      );
    }
  } catch (err) {
    console.error('Lỗi', err);
  }
}

export function* logoutUserSaga(): any {
  try {
    const toastId = toast.loading('Đang đăng xuất');
    const response = yield call(services.logoutUserServices);

    if (response.status === 200) {
      yield put(authLogoutSuccess());
      toast.success('Đăng xuất thành công', {
        toastId,
      });
    }
    toast.dismiss(toastId);
  } catch (err) {
    // Catch error don't have refreshToken, refreshToken invalid, or server return fail
    yield put(authLogoutSuccess());
    toast.success('Đăng xuất thành công');
    // toast.error("Đăng xuất thất bại");
  }
}

export function* authRefreshUserSaga(): any {
  try {
    const response = yield call(services.getUserInfoCurrent);

    console.log('Response: ', response);
    if (response.status === 200) {
      yield put(authRefreshuserSuccess(response?.data));
    }
  } catch (err) {}
}

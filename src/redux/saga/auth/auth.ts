import { call, put } from 'redux-saga/effects';
import { authLoginFailure, authLoginSuccess } from 'redux/actions/auth';
import { setAuthModalBox } from 'redux/actions/config';
import * as services from 'services/auth';
import Swal from 'sweetalert2';

export function* loginUserSaga({ payload }: any): any {
  try {
    const response = yield call(services.loginUserServices, payload);
    const { accessToken, refreshToken, ...result} = response?.data;

    accessToken && localStorage.setItem("accessToken", accessToken)
    refreshToken && localStorage.setItem("refreshToken", refreshToken)
    if (response.status === 200) {
      yield put(authLoginSuccess(result));
      Swal.fire('Đăng nhập thành công', '', 'success');
      yield put(setAuthModalBox({
          isShow: false
      }))
    } else {
      yield put(authLoginFailure(result));
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

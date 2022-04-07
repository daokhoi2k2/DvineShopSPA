import { toast } from 'react-toastify';
import { call, put } from 'redux-saga/effects';
import { authRefreshUser } from 'redux/actions/auth';
import { registerUserDuplicate } from 'redux/actions/user';
import * as services from 'services/user';

export function* registerUserSaga({ payload }: any): any {
  try {
    const response = yield call(services.registerUserServices, payload);

    // Catch case duplicate email or username
    if (response.data.code === 11000) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      const errors = response.data.keyPattern;
      
      if(errors.email) {
        yield put(registerUserDuplicate({
          email: "Email đã tồn tại"
        }))
      }

      if(errors.username) {
        yield put(registerUserDuplicate({
          username: "Tên đăng nhập đã có người sử dụng"
        }))
      }
    }

    if(response.status === 200) {
      toast.success("Đăng ký tài khoản thành công");
      // yield put()
    }
  } catch (err) {
    console.error('Lỗi', err);
  }
}

export function* updateUserSaga({ payload }: any): any {
  try {
    const response = yield call(services.updateUserServices, payload);

    if(response.status === 200) {
      yield put(authRefreshUser());
      toast.success("Cập nhật thông tin thành công");
    }
  } catch (err) {
    console.error('Lỗi', err);
  }
}

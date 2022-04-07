import { call, put } from 'redux-saga/effects';
import { clearDistrictLocation, clearWardLocation, getAllDistrictByCitySuccess, getAllWardByDistrictSuccess, getCityLocationSuccess } from 'redux/actions/location';
import * as services from 'services/location';

export function* getAllCitySaga(): any {
  try {
    const response = yield call(services.getAllCityServices);
    const result = response?.data;

    if (response.status === 200) {
      yield put(getCityLocationSuccess(result));
    }
    // else {
    //   yield put(authLoginFailure(result));
    //   Swal.fire(
    //     'Đăng nhập thất bại',
    //     'Sai mật khẩu hoặc tài khoản không tồn tại',
    //     'error'
    //   );
    // }
  } catch (err) {
    console.error('Lỗi', err);
  }
}

export function* getAllDistrictByCitySaga(city: any): any {
  try {
    const response = yield call(services.getAllDistrictByCityServices, city);
    const result = response?.data;

    if (response.status === 200) {
      // Xóa những cái district cũ khi thay đổi
      yield put(clearDistrictLocation());
      yield put(clearWardLocation());

      yield put(getAllDistrictByCitySuccess(result));
    }
  } catch (err) {
    console.error('Lỗi', err);
  }
}

export function* getAllWardByDistrictSaga(ward: any): any {
  try {
    const response = yield call(services.getAllWardByDistrictServices, ward);
    const result = response?.data;

    if (response.status === 200) {
      yield put(getAllWardByDistrictSuccess(result));
    }
  } catch (err) {
    console.error('Lỗi', err);
  }
}

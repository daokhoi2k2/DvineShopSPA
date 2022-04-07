import { all, takeLatest } from 'redux-saga/effects';
import { getAllCitySaga, getAllDistrictByCitySaga, getAllWardByDistrictSaga } from './location';
import * as types from 'redux/types/location';

export default function* categorySaga() {
  yield all([takeLatest(types.GET_CITY_LOCATION, getAllCitySaga)]);
  yield all([takeLatest(types.GET_DISTRICT_LOCATION_BY_CITY, getAllDistrictByCitySaga)]);
  yield all([takeLatest(types.GET_WARD_LOCATION_BY_DISTRICT, getAllWardByDistrictSaga)]);
}

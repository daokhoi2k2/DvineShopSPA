import * as types from "redux/types/location";

export const getCityLocation = () => ({
    type: types.GET_CITY_LOCATION,
});

export const getCityLocationSuccess = (payload: any) => ({
    type: types.GET_CITY_LOCATION_SUCCESS,
    payload
});

export const getAllDistrictByCity = (payload: string) => ({
    type: types.GET_DISTRICT_LOCATION_BY_CITY,
    payload
});

export const getAllDistrictByCitySuccess = (payload: string) => ({
    type: types.GET_DISTRICT_LOCATION_BY_CITY_SUCCESS,
    payload
});

export const getAllWardByDistrict = (payload: string) => ({
    type: types.GET_WARD_LOCATION_BY_DISTRICT,
    payload
});

export const getAllWardByDistrictSuccess = (payload: string) => ({
    type: types.GET_WARD_LOCATION_BY_DISTRICT_SUCCESS,
    payload
});

export const clearDistrictLocation = () => ({
    type: types.CLEAR_DISTRICT_LOCATION
})

export const clearWardLocation = () => ({
    type: types.CLEAR_WARD_LOCATION
})
import axios from 'axios';
import { ILogin } from 'typings/Auth';
import axiosJWT from 'utils/axiosJWT';

export const getAllCityServices = async () => {
  try {
    const res = await axiosJWT.get(
      `${process.env.REACT_APP_API_URL}/api/location`
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

export const getAllDistrictByCityServices = async ({ payload }: any) => {
  try {
    const res = await axiosJWT.get(
      `${process.env.REACT_APP_API_URL}/api/location/${payload}`
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

export const getAllWardByDistrictServices = async ({ payload }: any) => {
  try {
    const res = await axiosJWT.get(
      `${process.env.REACT_APP_API_URL}/api/location/ward/${payload}`
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

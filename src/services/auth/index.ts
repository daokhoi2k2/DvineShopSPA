import axios from 'axios';
import { ILogin } from 'typings/Auth';
import axiosJWT from 'utils/axiosJWT';

export const loginUserServices = async (user: ILogin) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        account: user.account,
        password: user.password,
      },
      {
        withCredentials: true,
      }
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

export const refreshTokenServices = async () => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/refresh`,
      {},
      {
        withCredentials: true,
      }
    );

    return res;
  } catch (err: any) {
    throw new Error('Error: ', err);
  }
};

export const logoutUserServices = async () => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    return res;
  } catch (err: any) {
    throw new Error('Error: ', err);
  }
};

export const getUserInfoCurrent = async () => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/auth/getCurrentUserInfo`,
      {},
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

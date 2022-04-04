import axios from 'axios';
import { ILogin } from 'typings/Auth';
import axiosJWT from 'utils/axiosJWT';

export const loginUserServices = async (user: ILogin) => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        account: user.account,
        password: user.password,
      }
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

export const refreshTokenServices = async (refreshToken: string) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/refresh`,
      {},
      {
        headers: {
          "refreshToken": `${refreshToken}`,
        },
      }
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

export const getUserInfoCurrent = async (accessToken: string) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/getCurrentUserInfo`,
      {},
      {
        headers: {
          "token": `Bearer ${accessToken}`,
        },
      }
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};
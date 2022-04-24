import axios from 'axios';
import axiosJWT from 'utils/axiosJWT';

interface IRegisterUser {
  email: string;
  username: string;
  password: string;
}

export const registerUserServices = async (data: IRegisterUser) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/user/register`,
      data
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

export const updateUserServices = async (payload: any) => {
  const { id, data } = payload;
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/api/user/${id}`,
      data
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

export const updateAvatarServices = async (payload: any) => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/api/user/avatar`,
      payload
    );

    return res;
  } catch (err: any) {
    return err.response;
  }
};

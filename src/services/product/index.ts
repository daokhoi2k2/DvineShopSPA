import axios from 'axios';
import axiosJWT from 'utils/axiosJWT';

export const getAllProductsServices = async () => {
  try {
    const res = await axiosJWT.get(`${process.env.REACT_APP_API_URL}/api/product`);
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const addProductServices = async (payload: any) => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/api/product`,
      payload,
      {
        headers: {
            "Content-Type": "multipart/form-data; boundary=something"
        }
      }
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

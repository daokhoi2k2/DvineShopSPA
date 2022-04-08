import axios from 'axios';
import { setProgressPercentUpdateProduct } from 'redux/actions/config';
import axiosJWT from 'utils/axiosJWT';
import store from "redux/store";

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
        },
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded / e.total) * 100) || 0;
          store.dispatch(setProgressPercentUpdateProduct(percent));
        }
      }
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

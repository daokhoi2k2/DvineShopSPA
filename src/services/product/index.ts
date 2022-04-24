import axios from 'axios';
import { setProgressPercentUpdateProduct } from 'redux/actions/config';
import axiosJWT from 'utils/axiosJWT';
import store from 'redux/store';
import { updateProductFailed } from 'redux/actions/product';

export const getAllProductsServices = async () => {
  try {
    const res = await axiosJWT.get(
      `${process.env.REACT_APP_API_URL}/api/product`
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getProductsListServices = async (payload: any) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/product/list`,
      { params: payload }
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getAutoCompleteListServices = async (payload: any) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/product/autocomplete`,
      { params: payload }
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const getProductByHashNameServices = async (payload: any) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/product/hash_name/${payload}`
    );
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
          'Content-Type': 'multipart/form-data; boundary=something',
        },
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded / e.total) * 100) || 0;
          store.dispatch(setProgressPercentUpdateProduct(percent));
        },
      }
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

export const updateProductServices = async (payload: any) => {
  try {
    const res = await axiosJWT.put(
      `${process.env.REACT_APP_API_URL}/api/product`,
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data; boundary=something',
        },
        onUploadProgress: (e) => {
          const percent = Math.round((e.loaded / e.total) * 100) || 0;
          store.dispatch(setProgressPercentUpdateProduct(percent));
        },
      }
    );
    return res;
  } catch (err: any) {
    const keyPattern = err?.response?.data;
    if (keyPattern) {
      return keyPattern;
    }

    return err;
  }
};

export const deleteProductServices = async (payload: any) => {
  try {
    const res = await axiosJWT.delete(
      `${process.env.REACT_APP_API_URL}/api/product/${payload}`
    );
    return res;
  } catch (err) {
    console.error(err);
  }
};

import axios from 'axios';
import axiosJWT from 'utils/axiosJWT';

export const getAllTagsService = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tag`);
    return res;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const addTagService = async (payload: any) => {
  try {
    const res = await axiosJWT.post(
      `${process.env.REACT_APP_API_URL}/api/tag`,
      payload
    );
    return res;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const updateTagService = async (payload: any) => {
  try {
    const res = await axiosJWT.patch(
      `${process.env.REACT_APP_API_URL}/api/tag`,
      payload
    );
    return res;
  } catch (err) {
    return err;
  }
};

import axios from 'axios';

export const getAllTagsService = async () => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tag`);
    return res;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const addTagsService = async (payload: any) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/tag`,
      payload
    );
    return res;
  } catch (err) {
    console.log(err);
    return {};
  }
};

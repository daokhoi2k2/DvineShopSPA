import * as types from "redux/types/category";

export const getAllCategories = () => ({
  type: types.GET_ALL_CATEGORIES,
});

export const getAllCategoriesSuccess = (payload: any) => ({
  type: types.GET_ALL_CATEGORIES_SUCCESS,
  payload,
});


import * as types from "redux/types/tag";

export const getAllTags = () => ({
  type: types.GET_ALL_TAGS,
});

export const getAllTagsSuccess = (payload: any) => ({
  type: types.GET_ALL_TAGS_SUCCESS,
  payload,
});

export const addTag = (payload: any) => ({
  type: types.ADD_TAG,
  payload
})

export const updateTag = (payload: any) => ({
  type: types.UPDATE_TAG,
  payload
})

export const removeTag = (payload: any) => ({
  type: types.REMOVE_TAG,
  payload
})
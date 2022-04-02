import * as types from "redux/types/category";

export const getAllCategories = (payload: any) => {
    return ({
        type: types.GET_ALL_CATEGORIES,
        payload
    })
}

export const getAllCategoriesSuccess = (payload: any) => ({
    type: types.GET_ALL_CATEGORIES_SUCCESS,
    payload
})
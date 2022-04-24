import * as types from "redux/types/user";

export const registerUser = (payload: any) => ({
    type: types.REGISTER_USER,
    payload
});

export const registerUserDuplicate = (payload: any) => ({
    type: types.REGISTER_USER_DUPLICATE,
    payload
});

export const updateUser = (payload: any) => ({
    type: types.UPDATE_USER,
    payload
})

export const updateAvatar = (payload: any) => ({
    type: types.UPDATE_AVATAR,
    payload
})
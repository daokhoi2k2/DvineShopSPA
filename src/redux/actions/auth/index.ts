import * as types from "redux/types/auth";
import { ILogin, IUser } from "typings/Auth";

export const authLogin = (payload: ILogin) => ({
    type: types.AUTH_LOGIN,
    payload
});

export const authLoginFailure = (payload: any) => ({
    type: types.AUTH_LOGIN_FAILURE,
    payload
});

export const authLoginSuccess = (payload: IUser) => ({
    type: types.AUTH_LOGIN_SUCCESS,
    payload
});

export const authLogout = () => ({
    type: types.AUTH_LOGOUT
})

export const authLogoutSuccess = () => ({
    type: types.AUTH_LOGOUT_SUCCESS
})
import * as types from "redux/types/auth";
import { ILogin } from "typings/Auth";

export const authLogin = (payload: ILogin) => ({
    type: types.AUTH_LOGIN,
    payload
});

export const authLoginFailure = (payload: any) => ({
    type: types.AUTH_LOGIN_FAILURE,
    payload
});

export const authLoginSuccess = (payload: any) => ({
    type: types.AUTH_LOGIN_SUCCESS,
    payload
});

export const authLogout = () => ({
    type: types.AUTH_LOGOUT
})

export const authLogoutSuccess = () => ({
    type: types.AUTH_LOGOUT_SUCCESS
})

export const authRefreshUser = () => ({
    type: types.AUTH_REFRESH_USER
})

export const authRefreshuserSuccess = (payload: any) => ({
    type: types.AUTH_REFRESH_USER_SUCCESS,
    payload
})
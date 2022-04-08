
import * as types from "redux/types/config";

interface IAuthModalBox {
    isShow: boolean;
    boxName?: "login" | "register"
}

export const toggleNavDrawer = () => ({
    type: types.TOGGLE_NAV_DRAWER,
})

export const setNavDrawer = (payload: boolean) => ({
    type: types.SET_NAV_DRAWER,
    payload
})

export const toggleAuthModalBox = () => ({
    type: types.TOGGLE_AUTH_MODAL_BOX
})

export const setAuthModalBox = (payload: IAuthModalBox) => ({
    type: types.SET_AUTH_MODAL_BOX,
    payload
})

export const toggleAdminNavDrawer = () => ({
    type: types.TOGGLE_ADMIN_NAV_DRAWER,
})

export const setAdminNavDrawer = (payload: boolean) => ({
    type: types.SET_ADMIN_NAV_DRAWER,
    payload
})

export const setDialogModal = (payload: boolean) => ({
    type: types.SET_DIALOG_MODAL,
    payload
})

export const setProgressPercentUpdateProduct = (payload: number) => ({
    type: types.SET_PROGRESS_PERCENT_UPDATE_PRODUCT,
    payload
})
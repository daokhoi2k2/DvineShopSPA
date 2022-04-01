import { type } from "os";
import * as types from "redux/types/config";
import produce from "immer";

export interface IAuthModalBox {
  isShow: boolean;
  boxName?: "login" | "register";
}

export interface IConfig {
  isNavDrawer: boolean;
  AuthModalBox: IAuthModalBox;
  isAdminNavDrawer: boolean;
}

const initialState: IConfig = {
  isNavDrawer: false,
  isAdminNavDrawer: true,
  AuthModalBox: {
    isShow: false,
    boxName: "login",
  },
};

const reducer = (state: IConfig = initialState, action: any) => {
  const result = produce(state, (draft) => {
    switch (action.type) {
      case types.TOGGLE_NAV_DRAWER:
        draft.isNavDrawer = !state.isNavDrawer;
        break;
      case types.SET_NAV_DRAWER:
        draft.isNavDrawer = action.payload;
        break;
      case types.TOGGLE_AUTH_MODAL_BOX:
        draft.AuthModalBox.isShow = action.payload;
        break;
      case types.SET_AUTH_MODAL_BOX:
        draft.AuthModalBox = action.payload;
        break;
      case types.TOGGLE_ADMIN_NAV_DRAWER:
        draft.isAdminNavDrawer = !state.isAdminNavDrawer;
        break;
      case types.SET_ADMIN_NAV_DRAWER:
        draft.isAdminNavDrawer = action.payload;
        break;
    }
  });

  return result;
};

export default reducer;

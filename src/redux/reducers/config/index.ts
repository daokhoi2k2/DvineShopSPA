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
      case types.SET_ADMIN_NAV_DRAWER:
        draft.isAdminNavDrawer = action.payload;
        break;
    }
  });

  return result;

  /* Trước khi dùng ImmerJS thì dùng Destructuring ES6 return sẽ rất dài  */

  // switch (action.type) {
  //   case types.TOGGLE_NAV_DRAWER:
  //     return {
  //       ...state,
  //       isNavDrawer: !state.isNavDrawer,
  //     };
  //   case types.SET_NAV_DRAWER:
  //     return {
  //       ...state,
  //       isNavDrawer: action.payload,
  //     };
  //   case types.TOGGLE_AUTH_MODAL_BOX:
  //     console.log("Toggle auth modal box");
  //     return {
  //       ...state,
  //       AuthModalBox: {
  //         ...state.AuthModalBox,
  //         isShow: !state.AuthModalBox.isShow,
  //       },
  //     };
  //   case types.SET_AUTH_MODAL_BOX:
  //     // Khi không dùng emmerjs return sẽ trở nên dài dòng
  //     // Lưu ý khi mutate state sẽ không render lại UI
  //     return {
  //       ...state,
  //       AuthModalBox: {
  //         ...state.AuthModalBox,
  //         ...action.payload,
  //       },
  //     };

  //   default:
  //     // console.error("Invalid action")
  //     return state;
  // }
};

export default reducer;

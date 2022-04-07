import produce from 'immer';
import * as types from 'redux/types/auth';
import { IUserInfo } from 'typings/Auth';
export interface IUser {
  userInfo: IUserInfo;
  refreshToken: string;
}

export interface IAuth {
  user: IUser | {};
  msgError: string;
}

const initialState: IAuth = {
  user: {},
  msgError: '',
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case types.AUTH_LOGIN_SUCCESS:
        draft.user = action.payload;
        break;
      case types.AUTH_LOGIN_FAILURE:
        draft.msgError = action.payload;
        break;
      case types.AUTH_REFRESH_USER_SUCCESS:
        draft.user.userInfo = action.payload;
        break;
      case types.AUTH_LOGOUT_SUCCESS:
        draft.user = {};
        draft.msgError = '';
        break;
    }
  });

export default reducer;

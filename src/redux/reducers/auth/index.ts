import produce from 'immer';
import * as types from 'redux/types/auth';

export interface IUserInfo {
  _id: string;
  username: string;
  email: string;
  balance: number;
  accumulated: number;
  role: number;
  createdAt: string;
  updatedAt: string;
}

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
  msgError: "",
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.AUTH_LOGIN_SUCCESS:
        draft.user = action.payload;
        break;
      case types.AUTH_LOGIN_FAILURE:
        draft.msgError = action.payload;
        break;
    }
  });

export default reducer;

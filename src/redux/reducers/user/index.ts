import produce from 'immer';
import * as types from 'redux/types/user';

const initialState: any = {
  registerError: {},
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    switch (action.type) {
      case types.REGISTER_USER_DUPLICATE:
        draft.registerError = action.payload;
        break;
    }
  });

export default reducer;

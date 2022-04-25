import produce from 'immer';
import * as types from 'redux/types/order';

export interface IOrder {
  userOrder: any;
}

const initialState: IOrder = {
  userOrder: {
    list: [],
    filter: [],
    orderDetail: {},
    pending: false,
  },
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_USER_ORDER_SUCCESS:
        draft.userOrder.pending = false;
        draft.userOrder.list = action.payload;
        break;
      case types.GET_USER_ORDER_PENDING:
        draft.userOrder.pending = true;
        break;
      case types.GET_ORDER_BY_ID_SUCCESS: 
        // console.log("Log")
        break;
    }
  });

export default reducer;

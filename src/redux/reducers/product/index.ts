import produce from "immer";
import * as types from "redux/types/product";

// export interface IProductItem {
//   _id: string;
//   title: string;
//   icon: string;
// }

// export interface ICategory {
//   data: IProductItem[];
// }

const initialState = {
  data: [],
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_PRODUCTS_SUCCESS:
        draft.data = action.payload
        break;
    }
  });

export default reducer;

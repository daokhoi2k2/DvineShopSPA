import axios from "axios";
import produce from "immer";
import { getAllProductsSuccess } from "redux/actions/product";
import * as types from "redux/types/product";
import { getAllProductsServices } from "services/product";

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

export const fetchProduct = () => async (dispatch: any) => {
  const res:any = await getAllProductsServices();

  dispatch(getAllProductsSuccess(res.data))
}

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_PRODUCTS_SUCCESS:
        draft.data = action.payload
        break;
    }
  });

export default reducer;

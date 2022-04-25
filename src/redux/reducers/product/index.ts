import produce from 'immer';
import * as types from 'redux/types/product';

// export interface IProductItem {
//   _id: string;
//   title: string;
//   icon: string;
// }

// export interface ICategory {
//   data: IProductItem[];
// }

const initialState = {
  allProducts: [],
  productsFeatured: [],
  updateFailMsg: {},
  pending: false,
};

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_PRODUCTS_SUCCESS:
        draft.allProducts = action.payload;
        break;
      case types.UPDATE_PRODUCT_FAILED:
        draft.updateFailMsg = action.payload;
        break;
      case types.GET_PRODUCTS_FEATURED:
        draft.pending = true;
        break;
      case types.GET_PRODUCTS_FEATURED_SUCCESS:
        draft.productsFeatured = [
          ...state.productsFeatured,
          ...action.payload,
        ] as any;
        draft.pending = false;
        break;
    }
  });

export default reducer;

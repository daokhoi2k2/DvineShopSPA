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
  productsFeatured: {
    loading: false,
    isMore: true,
    data: [],
  },
  productsWallet: {
    loading: false,
    isMore: true,
    data: [],
  },
  updateFailMsg: {},
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
        draft.productsFeatured.loading = true;
        break;
      case types.GET_PRODUCTS_FEATURED_SUCCESS:
        draft.productsFeatured.loading = false;
        draft.productsFeatured.isMore = action.payload.isMore;
        draft.productsFeatured.data = [
          ...draft.productsFeatured.data,
          ...action.payload.list,
        ] as any;
        break;
      case types.GET_PRODUCTS_WALLET:
        draft.productsWallet.loading = true;
        break;
      case types.GET_PRODUCTS_WALLET_SUCCESS:
        draft.productsWallet.loading = false;
        draft.productsWallet.isMore = action.payload.isMore;
        draft.productsWallet.data = [
          ...draft.productsWallet.data,
          ...action.payload.list,
        ] as any;
        break;
    }
  });

export default reducer;

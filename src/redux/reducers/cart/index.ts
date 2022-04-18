import produce from 'immer';
import { toast } from 'react-toastify';
import * as types from 'redux/types/cart';
import { ObjectType } from 'typescript';
import { IProductInfo } from 'typings/Product';

export interface ICartItem {
  _id: string;
  amount: number;
}

export interface ICart {
  cartList: ICartItem[];
}

const initialState = {
  cartList: {},
};

// const checkCartIsExists = (id, amount) => {

// }

export interface IProductCart {
  productInfo: IProductInfo;
  quantity: number;
}

const reducer = (state = initialState, action: any) =>
  produce(state, (draft: any) => {
    const currentInfo: any =
      state.cartList[action.payload as keyof typeof state.cartList];

    switch (action.type) {
      case types.ADD_CART_ITEM:
        const { _id, quantity, ...rest } = action.payload;

        // Check product exists ?
        const productInCart = Object.values(state.cartList).filter(
          (item: any) => {
            return item.productInfo._id === _id;
          }
        )[0] as IProductCart | undefined;

        if (productInCart) {
          draft.cartList = {
            ...state.cartList,
            [action.payload._id]: {
              ...rest,
              quantity: productInCart?.quantity + quantity,
            },
          };
        } else {
          draft.cartList = {
            ...state.cartList,
            [action.payload._id]: {
              ...rest,
              quantity,
            },
          };
        }
        break;
      case types.REMOVE_CART_ITEM:
        const newState: any = { ...state.cartList };
        delete newState[action.payload];
        draft.cartList = newState;
        break;
      case types.INCREASE_QUANTITY_CART_ITEM:
        draft.cartList[action.payload].quantity = currentInfo.quantity + 1;
        break;
      case types.DECREASE_QUANTITY_CART_ITEM:
        draft.cartList[action.payload].quantity = currentInfo.quantity - 1;
        break;
      case types.SET_QUANTITY_CART_ITEM:
        draft.cartList[action.payload._id].quantity = +action.payload.quantity;
        break;
      case types.REMOVE_CART_ITEM_PENDING:
        // console.log('ADD REMOVE', action);
        break;
      case types.CLEAR_CART:
        draft.cartList = {}
        break;
    }
  });

export default reducer;

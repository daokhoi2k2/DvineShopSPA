import * as types from "redux/types/cart";

export const getAllCart = () => ({
    type: types.GET_ALL_CART
});

export const addCartItem = (payload: any) => ({
    type: types.ADD_CART_ITEM,
    payload
});

export const increaseQuantityCartItem = (payload: any) => ({
    type: types.INCREASE_QUANTITY_CART_ITEM,
    payload
});

export const decreaseQuantityCartItem = (payload: any) => ({
    type: types.DECREASE_QUANTITY_CART_ITEM,
    payload
});

export const setQuantityCartItem = (payload: {_id: string, quantity: number}) => ({
    type: types.SET_QUANTITY_CART_ITEM,
    payload
});

export const removeCartItem = (payload: any) => ({
    type: types.REMOVE_CART_ITEM,
    payload
})

export const removeCartItemPending = (payload: any) => ({
    type: types.REMOVE_CART_ITEM_PENDING,
    payload
})

export const removeCartItemSuccess = (payload: any) => ({
    type: types.REMOVE_CART_ITEM_SUCCESS,
    payload
})

export const clearCart = () => ({
    type: types.CLEAR_CART,
})
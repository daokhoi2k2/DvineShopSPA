import * as types from "redux/types/order";

export const getAllOrder = () => ({
    type: types.GET_ALL_ORDER
})

export const getAllOrderSuccess = (payload: any) => ({
    type: types.GET_ALL_ORDER_SUCCESS,
    payload
})

export const getUserOder = (payload: any) => ({
    type: types.GET_USER_ORDER,
    payload
})

export const getUserOrderSuccess = (payload: any) => ({
    type: types.GET_USER_ORDER_SUCCESS,
    payload
})

export const getOrderById = (payload: number) => ({
    type: types.GET_ORDER_BY_ID,
    payload
})

export const getOrderByIdSuccess = (payload: any) => ({
    type: types.GET_ORDER_BY_ID_SUCCESS,
    payload
})

export const createOrder = (payload: any) => ({
    type: types.CREATE_ORDER,
    payload
});

// export const createOrderSuccess = (payload: any) => ({
//     type: types.INCREASE_QUANTITY_CART_ITEM,
//     payload
// });

// export const decreaseQuantityCartItem = (payload: any) => ({
//     type: types.DECREASE_QUANTITY_CART_ITEM,
//     payload
// });

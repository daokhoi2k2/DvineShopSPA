import { combineReducers } from "redux";
import configReducer from "./config";
import categoryReducer from "./category";
import productReducer from "./product";
import authReducer from "./auth";
import userReducer from "./user";
import locationReducer from "./location";
import cartReducer from "./cart";
import orderReducer from "./order";

export const rootReducer = combineReducers({
  config: configReducer,
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  user: userReducer,
  location: locationReducer,
  cart: cartReducer,
  order: orderReducer
});

// Yêu cầu trả về redux của typescript
export type RootState = ReturnType<typeof rootReducer>
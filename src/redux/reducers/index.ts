import { combineReducers } from "redux";
import configReducer from "./config";
import categoryReducer from "./category";
import productReducer from "./product";
import authReducer from "./auth";

export const rootReducer = combineReducers({
  config: configReducer,
  category: categoryReducer,
  product: productReducer,
  auth: authReducer
});

// Yêu cầu trả về redux của typescript
export type RootState = ReturnType<typeof rootReducer>
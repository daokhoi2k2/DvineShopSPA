import { combineReducers } from "redux";
import configReducer from "./config";
import categoryReducer from "./category";
import productReducer from "./product";

export const rootReducer = combineReducers({
  config: configReducer,
  category: categoryReducer,
  product: productReducer
});

// Yêu cầu trả về redux của typescript
export type RootState = ReturnType<typeof rootReducer>
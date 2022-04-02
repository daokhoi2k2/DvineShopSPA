import { combineReducers } from "redux";
import configReducer from "./config";
import categoReducer from "./category";

export const rootReducer = combineReducers({
  config: configReducer,
  category: categoReducer
});

// Yêu cầu trả về redux của typescript
export type RootState = ReturnType<typeof rootReducer>
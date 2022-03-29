import { combineReducers } from "redux";
import configReducer from "./config";

export const rootReducer = combineReducers({
  config: configReducer
  // auth: authReducer,
});

// Yêu cầu trả về redux của typescript
export type RootState = ReturnType<typeof rootReducer>
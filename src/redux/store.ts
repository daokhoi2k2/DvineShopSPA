import { compose, createStore } from "redux";
import {rootReducer} from "./reducers";

// Use Redux Developer with Typescript
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// initialState
const initialState = {};

// Create store
const store = createStore(rootReducer, initialState);

export default store;
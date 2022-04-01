import { applyMiddleware, compose, createStore } from "redux";
import {rootReducer} from "./reducers";

// Use Redux Developer with Typescript
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
      __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
    }
}

// preloadedState tham số thứ 2 của createStore sẽ có độ ưu tiện cao hơn initialState trong Reducer
// Docs: https://redux.js.org/usage/structuring-reducers/initializing-state
// const initialState = {
//   config: {
//     isNavDrawer: false,
//     isAdminNavDrawer: true,
//     AuthModalBox: {
//       isShow: false,
//       boxName: undefined,
//     },
//   }
// };


// Create store
const store = createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
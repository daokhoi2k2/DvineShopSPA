import { applyMiddleware, compose, createStore } from "redux";
import { getAllCategoryService } from "services/category";
import { getAllCategoriesSuccess } from "./actions/category";
import { setAuthModalBox } from "./actions/config";
import {rootReducer} from "./reducers";
import { GET_ALL_CATEGORIES } from "./types/category";

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Dùng 1 action khác để dispatch lấy kết quả đế tránh vòng lặp vô hạn khi
// dispatch => middleware => dispatch lại cái cũ => middleware , .....
const print1 = (store:any) => {
  return (next:any) => {
    return async (action: any) => {
      if(action.type === GET_ALL_CATEGORIES) {
        const res:any = await getAllCategoryService()
        return store.dispatch(getAllCategoriesSuccess(res.data));
      }
      return next(action);
    }
  }
}

const middlewareEnchancer = applyMiddleware(print1);


// Create store
const store = createStore(rootReducer, {}, composeEnhancers(middlewareEnchancer));

export default store;
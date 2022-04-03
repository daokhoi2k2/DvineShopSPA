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
const handleAsyncLogic = (store:any) => {
  return (next:any) => {
    return async (action: any) => {
      if(typeof action === 'function') {
          // Next sẽ là store.dispatch nếu đây là middleware cuối cùng 
          // Nên dùng action(next) vì có thể còn có middleware ở phía sau nếu dùng action(store.distpach) sẽ bỏ qua tất cả middleware ở phía dưới
          return action(next)
      }

      return next(action);
    }
  }
}


const middlewareEnchancer = applyMiddleware(handleAsyncLogic);


// Create store
const store = createStore(rootReducer, {}, composeEnhancers(middlewareEnchancer));

export default store;
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga';

// Use Redux Developer with Typescript
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

// Config redux persist
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['auth'] // Chỉ lưu localStorage auth
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


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
// const handleAsyncLogic = (store: any) => {
//   return (next: any) => {
//     return async (action: any) => {
//       if (typeof action === "function") {
//         // Next sẽ là store.dispatch nếu đây là middleware cuối cùng
//         // Nên dùng action(next) vì có thể còn có middleware ở phía sau nếu dùng action(store.distpach) sẽ bỏ qua tất cả middleware ở phía dưới
//         return action(next);
//       }

//       return next(action);
//     };
//   };
// };

const sagaMiddleware = createSagaMiddleware();



// const middlewareEnchancer = applyMiddleware(handleAsyncLogic);
const middlewareEnchancer = applyMiddleware(sagaMiddleware);

// Create store
const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(middlewareEnchancer)
);

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
export default store;

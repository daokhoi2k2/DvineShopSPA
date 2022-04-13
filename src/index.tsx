import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { GlobalStyles } from 'twin.macro';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'index.css';


// store.subscribe(() => {
//   console.log("Change state", store.getState());
// })
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
        <GlobalStyles /> {/* Fix tailwind transform variable css */}
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
);

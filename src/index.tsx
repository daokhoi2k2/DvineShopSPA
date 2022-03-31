import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from "redux/store"
import { GlobalStyles } from "twin.macro";
import "index.css"

store.subscribe(() => {
  console.log("Change state", store.getState());
})
ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <GlobalStyles /> {/* Fix tailwind transform variable css */}
    </BrowserRouter>
  </Provider>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

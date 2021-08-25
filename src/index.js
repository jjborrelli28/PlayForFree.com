import ReactDOM from "react-dom";
import { AppRouter } from "./routers/AppRouter";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);

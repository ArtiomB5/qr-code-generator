import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { appStore } from "./store";

const rootElement = document.getElementById("root");
render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  rootElement
);

import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "store";
import { StyleProvider } from "@ant-design/cssinjs";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </Provider>
  </BrowserRouter>
);

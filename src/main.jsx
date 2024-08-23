import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import store from "./store/store";
import { Provider } from "react-redux";

import { DOMAIN } from "./utility/api";

axios.defaults.baseURL = DOMAIN;
let token = localStorage.getItem("stram_prisma_access_token");
if (token) {
  token = JSON.parse(token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/main.scss";
import Provider from "./redux/provider";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

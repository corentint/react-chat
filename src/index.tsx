import "./index.css";
import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the container");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

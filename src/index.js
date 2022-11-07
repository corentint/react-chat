import "./index.css";
import App from "./App";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
var container = document.getElementById("root");
if (!container)
    throw new Error("Failed to find the container");
var root = ReactDOM.createRoot(container);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
//# sourceMappingURL=index.js.map
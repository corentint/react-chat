import { Grid } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import "./App.css";
import Chat from "./Chat";
var Users = ["A", "B"];
function App() {
    var _a = useState(""), displayedText = _a[0], setDisplayedText = _a[1];
    return (React.createElement(Grid, { container: true, spacing: 2 }, Users.map(function (x) {
        return (React.createElement(Chat, { key: x, id: x, displayedText: displayedText, setDisplayedText: setDisplayedText }));
    })));
}
export default App;
//# sourceMappingURL=App.js.map
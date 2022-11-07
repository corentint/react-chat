import { Button, Grid, TextField } from "@mui/material";
import * as React from "react";
import { useState, useCallback } from "react";
import "./App.css";
function App() {
    var _a = useState(""), displayedText = _a[0], setDisplayedText = _a[1];
    var _b = useState(""), userInput = _b[0], setUserInput = _b[1];
    var _c = useState(""), userInput2 = _c[0], setUserInput2 = _c[1];
    var handleClick1 = useCallback(function () {
        if (displayedText) {
            setDisplayedText(displayedText + "\n" + "user 1 : " + userInput);
        }
        else {
            setDisplayedText("user 1 : " + userInput);
        }
        setUserInput("");
    }, [userInput]);
    var handleClick2 = useCallback(function () {
        if (displayedText) {
            setDisplayedText(displayedText + "\n" + "user 2 : " + userInput2);
        }
        else {
            setDisplayedText("user 2 : " + userInput2);
        }
        setUserInput2("");
    }, [userInput2]);
    return (React.createElement(Grid, { container: true, spacing: 4, direction: "row" },
        React.createElement(Grid, { container: true, item: true, direction: "column" },
            React.createElement(Grid, { item: true },
                React.createElement("div", null, "Chat 1")),
            React.createElement(Grid, { item: true },
                React.createElement(TextField, { fullWidth: true, minRows: 4, value: displayedText, multiline: true, inputProps: {
                        readOnly: true
                    } })),
            React.createElement(Grid, { container: true },
                React.createElement(TextField, { value: userInput, onChange: function (e) { return setUserInput(e.currentTarget.value); } }),
                React.createElement(Button, { onClick: handleClick1 }, "OK"))),
        React.createElement(Grid, { container: true, item: true, direction: "column" },
            React.createElement(Grid, { item: true },
                React.createElement("div", null, "Chat 2")),
            React.createElement(Grid, { item: true },
                React.createElement(TextField, { fullWidth: true, minRows: 4, value: displayedText, multiline: true, inputProps: {
                        readOnly: true
                    } })),
            React.createElement(Grid, { container: true },
                React.createElement(TextField, { value: userInput2, onChange: function (e) { return setUserInput2(e.currentTarget.value); } }),
                React.createElement(Button, { onClick: handleClick2 }, "OK")))));
}
export default App;
//# sourceMappingURL=App.js.map
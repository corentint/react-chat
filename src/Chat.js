import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import "./Chat.css";
export default function Chat(_a) {
    var id = _a.id, displayedText = _a.displayedText, setDisplayedText = _a.setDisplayedText;
    var _b = useState(""), userInput = _b[0], setUserInput = _b[1];
    var handleClick = useCallback(function () {
        if (!userInput)
            return;
        var textToAdd = "user ".concat(id, ": ").concat(userInput);
        if (displayedText) {
            setDisplayedText("".concat(displayedText, "\n").concat(textToAdd));
        }
        else {
            setDisplayedText(textToAdd);
        }
        setUserInput("");
    }, [id, displayedText, userInput, setDisplayedText, setUserInput]);
    return (React.createElement(Grid, { container: true, item: true, xs: 4, direction: "column" },
        React.createElement(Grid, { item: true },
            React.createElement(Typography, { variant: "h6" },
                "Chat ",
                id)),
        React.createElement(Grid, { item: true },
            React.createElement(TextField, { fullWidth: true, minRows: 4, value: displayedText, multiline: true, inputProps: {
                    readOnly: true
                } })),
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true, xs: true },
                React.createElement(TextField, { fullWidth: true, value: userInput, onChange: function (e) { return setUserInput(e.currentTarget.value); } })),
            React.createElement(Grid, { item: true },
                React.createElement(Button, { className: "validate-button", variant: "contained", onClick: handleClick }, "OK")))));
}
//# sourceMappingURL=Chat.js.map
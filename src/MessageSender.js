import { Button, Grid, TextField } from "@mui/material";
import React from "react";
export default function MessageSender(_a) {
    var userInput = _a.userInput, setUserInput = _a.setUserInput, handleClick = _a.handleClick;
    return (React.createElement(Grid, { container: true },
        React.createElement(Grid, { item: true, xs: true },
            React.createElement(TextField, { fullWidth: true, value: userInput, onChange: function (e) { return setUserInput(e.currentTarget.value); } })),
        React.createElement(Grid, { item: true },
            React.createElement(Button, { className: "validate-button", variant: "contained", onClick: handleClick }, "OK"))));
}
//# sourceMappingURL=MessageSender.js.map
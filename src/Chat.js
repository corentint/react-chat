import { Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import "./Chat.css";
import Discussion from "./Discussion";
import MessageSender from "./MessageSender";
import Title from "./Title";
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
        React.createElement(Title, { id: id }),
        React.createElement(Discussion, { displayedText: displayedText }),
        React.createElement(MessageSender, { userInput: userInput, setUserInput: setUserInput, handleClick: handleClick })));
}
//# sourceMappingURL=Chat.js.map
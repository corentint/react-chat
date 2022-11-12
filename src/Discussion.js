import { Grid, TextField } from "@mui/material";
import * as React from "react";
export default function Discussion(_a) {
    var displayedText = _a.displayedText;
    return (React.createElement(Grid, { item: true },
        React.createElement(TextField, { fullWidth: true, minRows: 4, value: displayedText, multiline: true, inputProps: {
                readOnly: true
            } })));
}
//# sourceMappingURL=Discussion.js.map
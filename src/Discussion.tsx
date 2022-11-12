import { Grid, TextField } from "@mui/material";
import * as React from "react";

interface IDiscussion {
  displayedText: string;
}

export default function Discussion({ displayedText }: IDiscussion) {
  return (
    <Grid item>
      <TextField
        fullWidth
        minRows={4}
        value={displayedText}
        multiline
        inputProps={{
          readOnly: true,
        }}
      ></TextField>
    </Grid>
  );
}

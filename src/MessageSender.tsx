import { Button, Grid, TextField } from "@mui/material";
import React from "react";

interface IMessageSender {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}
export default function MessageSender({
  userInput,
  setUserInput,
  handleClick,
}: IMessageSender) {
  return (
    <Grid container>
      <Grid item xs>
        <TextField
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.currentTarget.value)}
        ></TextField>
      </Grid>
      <Grid item>
        <Button
          className="validate-button"
          variant="contained"
          onClick={handleClick}
        >
          OK
        </Button>
      </Grid>
    </Grid>
  );
}

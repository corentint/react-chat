import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import "./Chat.css";

interface ChatProps {
  id: string;
  displayedText: string;
  setDisplayedText: React.Dispatch<React.SetStateAction<string>>;
}

export default function Chat({
  id,
  displayedText,
  setDisplayedText,
}: ChatProps) {
  const [userInput, setUserInput] = useState("");

  const handleClick = useCallback(() => {
    if (!userInput) return;

    const textToAdd = `user ${id}: ${userInput}`;

    if (displayedText) {
      setDisplayedText(`${displayedText}\n${textToAdd}`);
    } else {
      setDisplayedText(textToAdd);
    }
    setUserInput("");
  }, [id, displayedText, userInput]);

  return (
    <Grid container item xs={4} direction={"column"}>
      <Grid item>
        <Typography variant="h6">Chat {id}</Typography>
      </Grid>
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
    </Grid>
  );
}

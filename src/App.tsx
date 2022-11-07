import { Button, Grid, TextField } from "@mui/material";
import * as React from "react";
import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [displayedText, setDisplayedText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");

  const handleClick1 = useCallback(() => {
    if (displayedText) {
      setDisplayedText(displayedText + "\n" + "user 1 : " + userInput);
    } else {
      setDisplayedText("user 1 : " + userInput);
    }
    setUserInput("");
  }, [userInput]);

  const handleClick2 = useCallback(() => {
    if (displayedText) {
      setDisplayedText(displayedText + "\n" + "user 2 : " + userInput2);
    } else {
      setDisplayedText("user 2 : " + userInput2);
    }
    setUserInput2("");
  }, [userInput2]);

  return (
    <Grid container spacing={4} direction="row">
      <Grid container item direction={"column"}>
        <Grid item>
          <div>Chat 1</div>
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
          <TextField
            value={userInput}
            onChange={(e) => setUserInput(e.currentTarget.value)}
          ></TextField>
          <Button onClick={handleClick1}>OK</Button>
        </Grid>
      </Grid>
      <Grid container item direction={"column"}>
        <Grid item>
          <div>Chat 2</div>
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
          <TextField
            value={userInput2}
            onChange={(e) => setUserInput2(e.currentTarget.value)}
          ></TextField>
          <Button onClick={handleClick2}>OK</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

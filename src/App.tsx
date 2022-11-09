import { Grid } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import "./App.css";
import Chat from "./Chat";

const Users = ["A", "B"];

function App() {
  const [displayedText, setDisplayedText] = useState("");

  return (
    <Grid container spacing={2}>
      {Users.map((x) => {
        return (
          <Chat
            key={x}
            id={x}
            displayedText={displayedText}
            setDisplayedText={setDisplayedText}
          ></Chat>
        );
      })}
    </Grid>
  );
}

export default App;

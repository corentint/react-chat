import { Grid } from "@mui/material";
import React, { useCallback, useState } from "react";
import "./Chat.css";
import Discussion from "./Discussion";
import MessageSender from "./MessageSender";
import Title from "./Title";

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
  }, [id, displayedText, userInput, setDisplayedText, setUserInput]);

  return (
    <Grid container item xs={4} direction={"column"}>
      <Title id={id}></Title>
      <Discussion displayedText={displayedText}></Discussion>
      <MessageSender
        userInput={userInput}
        setUserInput={setUserInput}
        handleClick={handleClick}
      ></MessageSender>
    </Grid>
  );
}

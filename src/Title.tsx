import { Grid, Typography } from "@mui/material";
import React from "react";

export interface ITitle {
  id: string;
}
export default function Title({ id }: ITitle) {
  return (
    <Grid item>
      <Typography variant="h6">Chat {id}</Typography>
    </Grid>
  );
}

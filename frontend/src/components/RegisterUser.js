/** @format */

import React from 'react';
import { makeStyles, CssBaseline, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

export default function RegisterUser() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <CssBaseline />
      <form>
        <TextField></TextField>
      </form>
    </main>
  );
}

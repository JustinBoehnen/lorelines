/** @format */

import React, { useState } from 'react';
import Navigation from './Navigation';
import { Route, withRouter } from 'react-router-dom';
import { Box, makeStyles, CssBaseline } from '@material-ui/core';

import Account from './Account';
import { Router } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}));

export default function Home() {
  //const [drawerOpen, setDrawerOpen] = useState(false);

  const setDrawer = isOpen => {
    //setDrawerOpen(isOpen);
  };

  return (
    <div>
      <CssBaseline />
      <Navigation setDrawer={setDrawer} />
      <Box marginLeft="70px" marginTop="100px"></Box>
      <Route path="/app/account">
        <Account />
      </Route>
      <Route path="/app/lorelines" component={Account} />
      <Route path="/app/new" component={() => <h1>New Custom Entity</h1>} />
      <Route path="/app/timeline" component={() => <h1>Timeline</h1>} />
      <Route path="/app/directory" component={() => <h1>Directory</h1>} />
      <Route path="/app/about" component={() => <h1>About</h1>} />
    </div>
  );
}

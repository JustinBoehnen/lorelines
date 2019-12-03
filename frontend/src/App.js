/** @format */

import React, { useState } from 'react';
import {
  createMuiTheme,
  MuiThemeProvider,
  CssBaseline,
  makeStyles,
  Grid
} from '@material-ui/core';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import RegisterUser from './components/RegisterUser';
import Account from './components/Account';

const light = createMuiTheme({
  palette: {
    primary: {
      // accent: orange
      main: '#f78d1e',
      contrastText: '#fff'
    },
    drawer: {
      main: '#d9d9d9',
      text: '#fff',
      icons: '#000'
    },
    secondary: {
      // contrast: black
      main: '#000'
    }
  }
});

const dark = createMuiTheme({
  palette: {
    primary: {
      // accent: orange
      main: '#f78d1e',
      contrastText: '#fff'
    },
    drawer: {
      main: '#222',
      text: '#fff',
      icons: '#fff'
    },
    secondary: {
      // contrast: white
      main: '#fff'
    },
    type: 'dark'
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function App() {
  const [email, setEmail] = useState('');
  const [auth, setAuth] = useState(false);
  const [theme, setTheme] = useState('dark');

  const classes = useStyles();

  const tryLogin = (tryEmail, tryPassword) => {
    setEmail(tryEmail);

    axios
      .post('http://localhost:3000/api/user/auth', {
        Email: { tryEmail },
        Password: { tryPassword }
      })
      .then(res => console.log(res.error))
      .catch(error => console.log(error));
  };

  return (
    <MuiThemeProvider theme={theme === 'dark' ? dark : light}>
      <CssBaseline />
      <Router>
        <div className={classes.root}>
          <Redirect
            to={{
              pathname: auth ? '/app' : '/'
            }}
          />

          <Route exact path="/">
            <Grid
              container
              direction="column-reverse"
              justify="center"
              alignItems="center"
            >
              <LoginForm className={classes.center} tryLogin={tryLogin} />
            </Grid>
          </Route>

          <Route exact path="/app">
            <Home />
          </Route>

          <Route path="/register" component={RegisterUser} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

/*

        <Redirect
          to={{
            pathname: auth ? '/app' : '/'
          }}
        />
        */

import React, { useState } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'
import axios from 'axios'

const light = createMuiTheme({
  palette: {
    primary: { // accent: orange
      main: '#f78d1e',
      contrastText: '#fff',

    },
    drawer: {
      main: '#d9d9d9',
      text: '#fff',
      icons: '#000',
    },
    secondary: { // contrast: black
      main: '#000',
    },
  },
})

const dark = createMuiTheme({
  palette: {
    primary: { // accent: orange
      main: '#f78d1e',
      contrastText: '#fff',
    },
    drawer: {
      main: '#222',
      text: '#fff',
      icons: '#fff',
    },
    secondary: { // contrast: white
      main: '#fff',
    },
    type: 'dark',
  },
})

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('dark');

  const tryLogin = (tryEmail, tryPassword) => {
    setEmail(tryEmail);
    setPassword(tryPassword);

    axios.post('http://localhost:3000/api/user/auth', {
      Email: { tryEmail },
      Password: { tryPassword },
    }).then(res => console.log(res.error)).catch(error => console.log(error))
  }

  return (
    <MuiThemeProvider theme={theme === 'dark' ? dark : light}>
      <div className="App">
      </div>
      <Router>

        <Route path='/register' component={() => <h1>About</h1>} />
      </Router>
    </MuiThemeProvider >
  );
}
import React, { Component } from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation';
import LoginForm from './components/LoginForm';

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

class App extends Component {
  state = {
    email: '',
    password: '',
    theme: 'light'
  }

  tryLogin = (email, password) => {
    console.log("email:",email);
    console.log("password:",password);
  }

  render(){
    return (
      <MuiThemeProvider theme={this.state.theme === 'dark' ? dark : light}>
        <div className="App">
        </div>
        <Router>
          <Route path='/'>
            <LoginForm tryLogin={this.tryLogin}/>
          </Route>
          <Route path='/account'>
            <Navigation name='This is the name' />
          </Route>
          <Route path='/lorelines'>
            <Navigation name='This is the name' />
          </Route>
          <Route path='/new'>
            <Navigation name='This is the name' />
          </Route>
          <Route path='/timeline'>
            <Navigation name='This is the name' />
          </Route>
          <Route path='/directory'>
            <Navigation name='This is the name' />
          </Route>
          <Route path='/about'>
            <Navigation name='This is the name' />
          </Route>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;

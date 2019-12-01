import React, {Component} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    email: '',
    password: ''
  }
  
  render(){
    return (
      <div className="App">
        <div style={{ textAlign: "center", marginTop: "5%" }}>
          <LoginForm email={this.state.email} password={this.state.password}/>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default App;

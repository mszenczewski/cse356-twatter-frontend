import React, { Component } from 'react';
import './App.css';

import LoginScreen from './components/LoginScreen'
import AddUserScreen from './components/AddUserScreen'
import VerifyScreen from './components/VerifyScreen'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Twatter</h1>
        <AddUserScreen />
        <VerifyScreen />
        <LoginScreen />
      </div>
    );    
  }
}

export default App;

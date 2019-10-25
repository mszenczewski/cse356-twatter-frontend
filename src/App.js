import React, { Component } from 'react';
import './App.css';

import LoginScreen from './components/LoginScreen'
import AddUserScreen from './components/AddUserScreen'
import VerifyScreen from './components/VerifyScreen'

class App extends Component {
  render() {
    return (
      <div>
        <AddUserScreen />
        <VerifyScreen />
        <LoginScreen />
      </div>
    );    
  }
}

export default App;

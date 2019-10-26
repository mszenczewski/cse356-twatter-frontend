import React, { Component } from 'react';
import './App.css';

import LoginScreen from './components/LoginScreen'
import LogoutScreen from './components/LogoutScreen';
import VerifyScreen from './components/VerifyScreen'
import AddUserScreen from './components/AddUserScreen'
import AddItemScreen from './components/AddItemScreen'
import GetItemScreen from './components/GetItemScreen'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Twatter</h1>
        <AddUserScreen />
        <VerifyScreen />
        <LoginScreen />
        <LogoutScreen />
        <AddItemScreen />
        <GetItemScreen />
      </div>
    );    
  }
}

export default App;

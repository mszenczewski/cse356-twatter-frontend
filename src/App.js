import React, { Component } from 'react';
import './App.css';

import LoginScreen from './components/LoginScreen'
import AddUserScreen from './components/AddUserScreen'

class App extends Component {
  render() {
    return (
      <div>
        <LoginScreen />
        <AddUserScreen />
      </div>
    );
  }
}

export default App;

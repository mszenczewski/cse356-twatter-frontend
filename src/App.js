import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import LoginScreen from './components/LoginScreen'
import LogoutScreen from './components/LogoutScreen';
import VerifyScreen from './components/VerifyScreen'
import AddUserScreen from './components/AddUserScreen'
import AddItemScreen from './components/AddItemScreen'
import GetItemScreen from './components/GetItemScreen'
import SearchScreen from './components/SearchScreen'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Twatter</h1>
          <Switch>
            <Route exact path="/twatter/" component={LoginScreen} />
            <Route path="/twatter/adduser" component={AddUserScreen} />
            <Route path="/twatter/verify" component={VerifyScreen} />
            <Route path="/twatter/logout" component={LogoutScreen} />
            <Route path="/twatter/additem" component={AddItemScreen} />
            <Route path="/twatter/getitem" component={GetItemScreen} />
            <Route path="/twatter/search" component={SearchScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomeScreen from './components/HomeScreen'
import LoginScreen from './components/LoginScreen'
import LogoutScreen from './components/LogoutScreen'
import VerifyScreen from './components/VerifyScreen'
import AddUserScreen from './components/AddUserScreen'
import AddItemScreen from './components/AddItemScreen'
import GetItemScreen from './components/GetItemScreen'
import GetUserScreen from './components/GetUserScreen'
import SearchScreen from './components/SearchScreen'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div id="banner">
            <Link id="banner_title" to="/twatter/">TWATTER</Link>
          </div>
          <div id="navbar">
            <Link className="navbar_button" to="/twatter/adduser">REGISTER</Link>
            <Link className="navbar_button" to="/twatter/user">USER</Link>
            <Link className="navbar_button" to="/twatter/verify">VERIFY</Link>
            <Link className="navbar_button" to="/twatter/login">LOGIN</Link>
            <Link className="navbar_button" to="/twatter/additem">TWEET</Link>
            <Link className="navbar_button" to="/twatter/item">ITEM</Link>
            <Link className="navbar_button" to="/twatter/search">SEARCH</Link>
            <Link className="navbar_button" to="/twatter/logout">LOGOUT</Link>
          </div>
          <Switch>
            <Route path="/twatter/adduser" component={AddUserScreen} />
            <Route path="/twatter/user" component={GetUserScreen} />
            <Route path="/twatter/verify" component={VerifyScreen} />
            <Route path="/twatter/login" component={LoginScreen} />
            <Route path="/twatter/logout" component={LogoutScreen} />
            <Route path="/twatter/additem" component={AddItemScreen} />
            <Route path="/twatter/item" component={GetItemScreen} />
            <Route path="/twatter/search" component={SearchScreen} />
            <Route component={HomeScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// export default App;

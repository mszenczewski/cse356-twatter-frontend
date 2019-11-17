import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import HomeScreen from './components/HomeScreen'

import RegisterScreen from './components/RegisterScreen'
import VerifyScreen from './components/VerifyScreen'
import LoginScreen from './components/LoginScreen'
import TweetScreen from './components/TweetScreen'
import UserScreen from './components/UserScreen'
import ItemScreen from './components/ItemScreen'
import SearchScreen from './components/SearchScreen'
import FollowScreen from './components/FollowScreen'
import LogoutScreen from './components/LogoutScreen'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div id="banner">
            <Link id="banner_title" to="/twatter/">TWATTER</Link>
          </div>
          <div id="navbar">
            <Link className="navbar_button" to="/twatter/register">REGISTER</Link>
            <Link className="navbar_button" to="/twatter/verify">VERIFY</Link>
            <Link className="navbar_button" to="/twatter/login">LOGIN</Link>
            <Link className="navbar_button" to="/twatter/tweet">TWEET</Link>
            <Link className="navbar_button" to="/twatter/user">USER</Link>
            <Link className="navbar_button" to="/twatter/follow">FOLLOW</Link>
            <Link className="navbar_button" to="/twatter/item">ITEM</Link>
            <Link className="navbar_button" to="/twatter/search">SEARCH</Link>
            <Link className="navbar_button" to="/twatter/logout">LOGOUT</Link>
          </div>
          <Switch>
            <Route path="/twatter/register" component={RegisterScreen} />
            <Route path="/twatter/verify" component={VerifyScreen} />
            <Route path="/twatter/login" component={LoginScreen} />
            <Route path="/twatter/tweet" component={TweetScreen} />
            <Route path="/twatter/user" component={UserScreen} />
            <Route path="/twatter/item" component={ItemScreen} />
            <Route path="/twatter/search" component={SearchScreen} />
            <Route path="/twatter/follow" component={FollowScreen} />
            <Route path="/twatter/logout" component={LogoutScreen} />
            <Route component={HomeScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
import React, { Component } from 'react';
import axios from 'axios';

export class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    response: ''
  };

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleLoginSubmission = e => {
    e.preventDefault();

    const json = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/login", json)
      .then(res => {
        console.log('LOGIN RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          this.setState({response: 'Succesfully logged in!'});
        } else {
          this.setState({response: res.data.error}); 
        }
      })
      .catch(err => {
        console.log('LOGIN ERROR: ' + err);
      });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLoginSubmission}>
          <div>
            <label htmlFor="usernameInput">Username: </label>
            <input
              id="usernameInput"
              onChange={this.handleUsernameChange}
              type="text"
              value={this.state.username}
            />
          </div>
          <div>
            <label htmlFor="passwordInput">Password: </label>
            <input
              id="passwordInput"
              onChange={this.handlePasswordChange}
              type="password"
              value={this.state.password}
            />
          </div>
          <button>Submit</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

export default LoginScreen;

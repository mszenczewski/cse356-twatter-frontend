import React, { Component } from 'react';
import axios from 'axios';


export class LoginScreen extends Component {
  state = {
    username: "",
    password: ""
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

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/login", data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
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
      </div>
    );
  }
}

export default LoginScreen;

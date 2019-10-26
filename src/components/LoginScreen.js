import React, { Component } from 'react';
import axios from 'axios';

export default class LoginScreen extends Component {
  state = {
    username: '',
    password: '',
    response: ''
  };

  username_change = e => {
    this.setState({
      username: e.target.value
    });
  };

  password_change = e => {
    this.setState({
      password: e.target.value
    });
  };

  submit = e => {
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
      <div class='content_box'>
        <h2>Login</h2>
        <form onSubmit={this.submit}>
          <div>
            <label htmlFor="usernameInput">Username: </label>
            <input
              id="usernameInput"
              onChange={this.username_change}
              type="text"
              value={this.state.username}
            />
          </div>
          <div>
            <label htmlFor="passwordInput">Password: </label>
            <input
              id="passwordInput"
              onChange={this.password_change}
              type="password"
              value={this.state.password}
            />
          </div>
          <button>Submit</button>
        </form>
        <h3 className='response'>{this.state.response}</h3>
      </div>
    );
  }
}

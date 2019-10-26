import React, { Component } from 'react';
import axios from 'axios';

export class AddUserScreen extends Component {
  state = {
    username: '',
    password: '',
    email: '',
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

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    const json = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/adduser", json)
      .then(res => {
        console.log('ADDUSER RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          this.setState({response: 'Succesfully added user!'});
        } else {
          this.setState({response: res.data.error}); 
        }

      })
      .catch(err => {
        console.log('ADDUSER ERROR: ' + err);
      });
  };

  render() {
    return (
      <div>
        <h2>Add User</h2>
        <form onSubmit={this.submit}>
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
          <div>
            <label htmlFor="emailInput">Email: </label>
            <input
              id="emailInput"
              onChange={this.handleEmailChange}
              type="email"
              value={this.state.email}
            />
          </div>
          <button>Submit</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

export default AddUserScreen;

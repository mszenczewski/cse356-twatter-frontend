import React, { Component } from 'react';
import axios from 'axios';


export class AddUserScreen extends Component {
  state = {
    username: '',
    password: '',
    email: ''
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

  handleAddUserSubmission = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.password
    };

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/adduser", data)
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
        <h1>Add User</h1>
        <form onSubmit={this.handleAddUserSubmission}>
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
      </div>
    );
  }
}

export default AddUserScreen;

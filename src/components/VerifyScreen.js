import React, { Component } from 'react';
import axios from 'axios';

export default class VerifyScreen extends Component {
  state = {
    email: '',
    key: '',
    response: ''
  };

  email_change = e => {
    this.setState({
      email: e.target.value
    });
  };

  key_change = e => {
    this.setState({
      key: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    const json = {
      email: this.state.email,
      key: this.state.key
    };

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/verify", json)
      .then(res => {
        console.log('VERIFY RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          this.setState({response: 'Succesfully verified email!'});
        } else {
          this.setState({response: res.data.error}); 
        }
      })
      .catch(err => {
        console.log('VERIFY ERROR: ' + err);
      });
  };


  render() {
    return (
      <div className="main">
        <h2>Verify</h2>
        <form onSubmit={this.submit}>
          <div>
            <label htmlFor="emailInput">Email: </label>
            <input
              id="emailInput"
              onChange={this.email_change}
              type="email"
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="keyInput">Key: </label>
            <input
              id="keyInput"
              onChange={this.key_change}
              type="text"
              value={this.state.key}
            />
          </div>
          <button>Submit</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

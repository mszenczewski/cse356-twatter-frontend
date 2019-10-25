import React, { Component } from 'react';
import axios from 'axios';

export class VerifyScreen extends Component {
  state = {
    email: '',
    key: '',
    response: ''
  };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handleKeyChange = e => {
    this.setState({
      key: e.target.value
    });
  };

  handleVerifySubmission = e => {
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
      <div>
        <h1>Verify</h1>
        <form onSubmit={this.handleVerifySubmission}>
          <div>
            <label htmlFor="emailInput">Email: </label>
            <input
              id="emailInput"
              onChange={this.handleEmailChange}
              type="email"
              value={this.state.email}
            />
          </div>
          <div>
            <label htmlFor="keyInput">Key: </label>
            <input
              id="keyInput"
              onChange={this.handleKeyChange}
              type="key"
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

export default VerifyScreen;

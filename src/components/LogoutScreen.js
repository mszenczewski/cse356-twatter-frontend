import React, { Component } from 'react';
import axios from 'axios';

export default class LogoutScreen extends Component {
  state = {
    response: ''
  };

  submit = e => {
    e.preventDefault();

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/logout")
      .then(res => {
        console.log('LOGOUT RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          this.props.history.push('/twatter/');          
        } else {
          this.setState({response: res.data.error}); 
        }
      })
      .catch(err => {
        console.log('LOGOUT ERROR: ' + err);
      });
  };

  render() {
    return (
      <div className="content_box">
        <h2>Logout</h2>
        <form onSubmit={this.submit}>
          <button>Confirm</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

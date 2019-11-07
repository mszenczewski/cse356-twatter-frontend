import React, { Component } from 'react';
import axios from 'axios';

export default class GetUserScreen extends Component {
  state = {
    username: '',
    response: '',
    results: ''
  };

  username_change = e => {
    this.setState({
      username: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    if (this.state.username === '') {
      this.setState({response: 'no username entered'});
      return;
    }

    axios
      .get("http://gaillardia.cse356.compas.cs.stonybrook.edu/user/" + this.state.username)
      .then(res => {
        console.log('ITEM RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          let s = '';

          s += 'Email: ' + res.data.user.email + '\n';
          s += 'Followers: ' + res.data.user.followers + '\n';
          s += 'Following: ' + res.data.user.following;

          this.setState({results: s});
          this.setState({response: ''});
        } else {
          this.setState({response: res.data.error}); 
        }
      })
      .catch(err => {
        console.log('ITEM ERROR: ' + err);
      });
  };

  render() {
    return (
      <div className="content_box">
        <h2>Get User</h2>
        <form onSubmit={this.submit}>
        <div>
          <label htmlFor="usernameInput">Username:</label>
          <input
            username="username"
            onChange={this.username_change}
            type="text"
            value={this.state.username}
            />
        </div>
        <button>Submit</button>
        </form>
        <h3>{this.state.response}</h3>
        <div id='results'>
          {this.state.results.split('\n').map((i,key) => {
            return <div className="results_item" key={key}>{i}</div>;
          })}
        </div>
      </div>
    );
  }
}

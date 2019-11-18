import React, { Component } from 'react';
import Axios from 'axios';

export default class FollowScreen extends Component {
  state = {
    username: '',
    follow: false,
    response: ''
  };

  username_change = e => {this.setState({username: e.target.value});};
  follow_change = e => {this.setState({follow: e.target.checked});};

  submit = async e => {
    e.preventDefault();

    const json = {
      username: this.state.username,
      follow: this.state.follow
    };

    try {
      const res = await Axios.post('http://gaillardia.cse356.compas.cs.stonybrook.edu/follow', json);
      console.log('FOLLOW RESPONSE: ' + JSON.stringify(res.data, null, 2));
      if (res.data.status === 'OK') {
        if (json.follow === true) this.setState({response: 'Succesfully followed ' + json.username + '!'});
        if (json.follow === false) this.setState({response: 'Succesfully unfollowed ' + json.username + '!'})
      }
    } catch (err) {
      console.log('FOLLOW ERROR: ' + err);
      this.setState({response: err.response.data.error});
    }
  };

  render() {
    return (
      <div>
        <h2>Follow</h2>
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
            <label htmlFor="followInput">Follow: </label>
            <input
              id="followInput"
              onChange={this.follow_change}
              type="checkbox"
              value={this.state.follow}
            />
          </div>
          <button className="submit_button">Submit</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

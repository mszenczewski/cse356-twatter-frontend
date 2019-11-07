import React, { Component } from 'react';
import axios from 'axios';
import UserCard from './UserCard'

export default class UserScreen extends Component {
  state = {
    username: '',
    response: '',
    card_show: false,
  };

  show_card = () => {
    this.setState({card_show: true});
    this.setState({response: ''});
  }

  hide_card = () => {
    this.setState({card_show: false});
  }

  username_change = e => {
    this.setState({
      username: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    if (this.state.username === '') {
      this.setState({response: 'no username entered'});
      this.hide_card();
      return;
    }

    axios
      .get("http://gaillardia.cse356.compas.cs.stonybrook.edu/user/" + this.state.username)
      .then(res => {
        console.log('ITEM RESPONSE: ' + JSON.stringify(res.data, null, 2));
        this.hide_card();
        if (res.data.status === 'OK') {
          this.show_card();

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
      <div>
        <h2>User</h2>
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
        {this.state.card_show ? <UserCard username={this.state.username}/> : null}
      </div>
    );
  }
}

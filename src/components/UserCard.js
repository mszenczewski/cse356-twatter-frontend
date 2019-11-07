import React, { Component } from 'react';
import axios from 'axios';

export default class UserCard extends Component {
  state = {
    username: '',
    email: '',
    followers: 0,
    following: 0,
    items: [],
    follower_list: [],
    following_list: [],
    response: ''
  }

  componentDidMount() {
    this.setState({username: this.props.username});
    axios
      .get(`http://gaillardia.cse356.compas.cs.stonybrook.edu/user/${this.props.username}`)
      .then(res => {
        console.log('USERCARD RESPONSE A: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          this.setState({email: res.data.user.email});
        } 
      })
      .catch(err => {
        console.log('USERCARD ERROR: ' + err);
      });
  
      axios
      .get(`http://gaillardia.cse356.compas.cs.stonybrook.edu/user/${this.props.username}/posts`)
      .then(res => {
        console.log('USERCARD RESPONSE B: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          var s = '';
          for (var i = 0; i < res.data.items.length; i++) {
            s += res.data.items[i];
            s += ' ';
          }
          this.setState({items: s});
        } 
      })
      .catch(err => {
        console.log('USERCARD ERROR: ' + err);
      });

      axios
      .get(`http://gaillardia.cse356.compas.cs.stonybrook.edu/user/${this.props.username}/followers`)
      .then(res => {
        console.log('USERCARD RESPONSE C: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          var s = '';
          for (var i = 0; i < res.data.users.length; i++) {
            s += res.data.users[i];
            s += ' ';
          }
          this.setState({follower_list: s});
        } 
      })
      .catch(err => {
        console.log('USERCARD ERROR: ' + err);
      });

      axios
      .get(`http://gaillardia.cse356.compas.cs.stonybrook.edu/user/${this.props.username}/following`)
      .then(res => {
        console.log('USERCARD RESPONSE D: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          var s = '';
          for (var i = 0; i < res.data.users.length; i++) {
            s += res.data.users[i];
            s += ' ';
          }
          this.setState({following_list: s});
        } 
      })
      .catch(err => {
        console.log('USERCARD ERROR: ' + err);
      });

  }

  render() {
    return (
      <div>
        <div className="content_card">
          <h3>{this.state.username}</h3>
          <h4>{this.state.email}</h4>
          <h5>Followers: {this.state.followers}</h5>
          <h5>Following: {this.state.following}</h5>
          <h5>Tweets: {this.state.items}</h5>
          <h5>Followers: {this.state.follower_list}</h5>
          <h5>Following: {this.state.following_list}</h5>
        </div>
      </div>
    );
  }
}

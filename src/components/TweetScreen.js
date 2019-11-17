import React, { Component } from 'react';
import axios from 'axios';

export default class TweetScreen extends Component {
  state = {
    content: '',
    response: ''
  };

  content_change = e => {this.setState({content: e.target.value});};

  submit = e => {
    e.preventDefault();

    const json = {
      content: this.state.content,
    };

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/additem", json)
      .then(res => {
        console.log('ADDITEM RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          this.setState({response: 'Succesfully added item! ID: ' + res.data.id});
        } else {
          this.setState({response: res.data.error}); 
        }

      })
      .catch(err => {
        console.log('ADDITEM ERROR: ' + err);
      });
  };

  render() {
    return (
      <div>
        <h2>Tweet</h2>
        <form onSubmit={this.submit}>
          <div>
            <label>Content:</label>
            <input
              id="contentInput"
              onChange={this.content_change}
              type="text"
              value={this.state.content}
              />
          </div>
        <button className="submit_button">Submit</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}
import React, { Component } from 'react';
import axios from 'axios';

export default class AddItemScreen extends Component {
  state = {
    content: '',
    childType: 'none',
    response: ''
  };

  content_change = e => {
    this.setState({
      content: e.target.value
    });
  };

  childType_change = e => {
    this.setState({
      childType: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    const json = {
      content: this.state.content,
    };

    if (this.state.childType !== 'none') {
      json.childType = this.state.childType;
    }

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
      <div class='content_box'>
        <h2>Add Item</h2>
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
          <div>
            <label>Type:</label>
            <select 
              id="typeList" 
              onChange={this.childType_change}
              value={this.state.childType}
              >
                <option value="none"></option>
                <option value="retweet">Retweet</option>
                <option value="reply">Reply</option>
            </select>
          </div>        
        <button>Submit</button>
        </form>
        <h3 className='response'>{this.state.response}</h3>
      </div>
    );
  }
}
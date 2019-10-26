import React, { Component } from 'react';
import axios from 'axios';

export class AddItemScreen extends Component {
  state = {
    content: '',
    childType: 'none',
    response: ''
  };

  handleContentChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleChildTypeChange = e => {
    this.setState({
      childType: e.target.value
    });
  };

  handleAddItemSubmission = e => {
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
      <div>
        <h2>Add Item</h2>
        <form onSubmit={this.handleAddItemSubmission}>
          <div>
            <label htmlFor="contentInput">Content:</label>
            <input
              id="contentInput"
              onChange={this.handleContentChange}
              type="text"
              value={this.state.content}
              />
          </div>
          <div>
            <label htmlFor="typeList">Type:</label>
            <select 
              id="typeList" 
              onChange={this.handleChildTypeChange}
              value={this.state.childType}
              >
                <option value="none"></option>
                <option value="retweet">Retweet</option>
                <option value="reply">Reply</option>
            </select>
          </div>        
        <button>Submit</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

export default AddItemScreen;

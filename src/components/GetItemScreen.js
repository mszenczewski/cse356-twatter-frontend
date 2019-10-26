import React, { Component } from 'react';
import axios from 'axios';

export class GetItemScreen extends Component {
  state = {
    id: '',
    response: ''
  };

  handleIdChange = e => {
    this.setState({
      id: e.target.value
    });
  };

  handleGetItemSubmission = e => {
    e.preventDefault();

    axios
      .get("http://gaillardia.cse356.compas.cs.stonybrook.edu/item/" + this.state.id)
      .then(res => {
        console.log('ITEM RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          this.setState({response: res.data.item.content});
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
        <h2>Get Item</h2>
        <form onSubmit={this.handleGetItemSubmission}>
          <div>
            <label htmlFor="idInput">Content:</label>
            <input
              id="id"
              onChange={this.handleIdChange}
              type="text"
              value={this.state.id}
              />
          </div>
        <button>Submit</button>
        </form>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

export default GetItemScreen;

import React, { Component } from 'react';
import axios from 'axios';

export default class GetItemScreen extends Component {
  state = {
    id: '',
    response: ''
  };

  id_change = e => {
    this.setState({
      id: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    if (this.state.id === '') {
      this.setState({response: 'no item entered'});
      return;
    }

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
      <div className="content_box">
        <h2>Get Item</h2>
        <form onSubmit={this.submit}>
        <div>
          <label htmlFor="idInput">ID:</label>
          <input
            id="id"
            onChange={this.id_change}
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

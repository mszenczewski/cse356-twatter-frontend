import React, { Component } from 'react';
import axios from 'axios';

export default class ItemCard extends Component {
  state = {
    response: ''
  }

  delete_tweet = e => {
    e.preventDefault();

    axios
      .delete("http://gaillardia.cse356.compas.cs.stonybrook.edu/item/" + this.props.item.id)
      .then(res => {
        console.log('ITEMCARD RESPONSE: ' + JSON.stringify(res.data, null, 2));
        this.props.delete_done();
      })
      .catch(err => {
        console.log('ITEMCARD ERROR: ' + err);
        this.setState({response: err.response.data.error});
      });
  };  

  render() {
    return (
      <div>
        <div className="content_card">
          <h3>{this.props.item.content}</h3>
          <h4>{this.props.item.username}</h4>
          <button onClick={this.delete_tweet}>Delete Tweet</button>
        </div>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';

import ItemCard from './ItemCard'

export default class ItemScreen extends Component {
  state = {
    id: '',
    response: '',
    card_show: false,
    card_item: ''
  };

  id_change = e => {
    this.setState({
      id: e.target.value
    });
  };

  show_card = () => {
    this.setState({card_show: true});
    this.setState({response: ''});
  }

  hide_card = () => {
    this.setState({card_show: false});
  }

  delete_done = () => {
    this.hide_card();
    this.setState({response: 'Tweet succesfully deleted!'});    
  }

  submit = e => {
    e.preventDefault();

    if (this.state.id === '') {
      this.setState({response: 'no item entered'});
      this.hide_card();
      return;
    }

    axios
      .get("http://gaillardia.cse356.compas.cs.stonybrook.edu/item/" + this.state.id)
      .then(res => {
        console.log('ITEM RESPONSE: ' + JSON.stringify(res.data, null, 2));
        this.hide_card(); 
        if (res.data.status === 'OK') {
          this.setState({card_item: res.data.item});
          this.show_card();
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
        <h2>Item</h2>
        <form onSubmit={this.submit}>
          <label htmlFor="idInput">ID:</label>
          <input
            id="id"
            onChange={this.id_change}
            type="text"
            value={this.state.id}
            />
          <button>Submit</button>
        </form>
        <h3>{this.state.response}</h3>
        {this.state.card_show ? <ItemCard item={this.state.card_item} delete_done={this.delete_done}/> : null}
      </div>
    );
  }
}

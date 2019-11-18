import React, { Component } from 'react';
import Axios from 'axios';

export default class ItemCard extends Component {
  state = {
    response: ''
  }

  delete = e => {
    e.preventDefault();

    Axios
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

  unlike = e => {
    e.preventDefault();
    this.send_post(false);
  }; 

  like = e => {
    e.preventDefault();
    this.send_post(true);
  };  

  send_post = async (t) => {
    try {
      const res = await Axios.post(`http://gaillardia.cse356.compas.cs.stonybrook.edu/item/${this.props.item.id}/like`, {like: t});
      console.log('LIKE RESPONSE: ' + JSON.stringify(res.data, null, 2));

      if (t) var msg = 'liked';
      if (!t) var msg = 'unliked';

      if (res.data.status === 'OK') this.props.set_response(`Succesfully ${msg} tweet!`);
    } catch (err) {
      console.log('LIKE ERROR: ' + err);
      this.props.set_response(err.response.data.error);
    }
  };

  render() {
    return (
      <div className="content_card">  
        <h3>{this.props.item.content}</h3>
        <h4>{this.props.item.username}</h4>
        <div className="tweet_button_container">          
          <button onClick={this.like}>Like</button>
          <button onClick={this.unlike}>Unlike</button>
          <button className="tweet_button" onClick={this.delete}>Delete</button>
        </div>
        <h3>{this.state.response}</h3>
      </div>
    );
  }
}

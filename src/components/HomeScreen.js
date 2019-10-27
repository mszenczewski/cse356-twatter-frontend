import React, { Component } from 'react';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="content_box">
        <h2>Welcome!</h2>
        <div id="instructions">
          <h4>How To Use:</h4>
          <span className="num">1.</span><span className="instruction">Add User</span><br/>
          <span className="num">2.</span><span className="instruction">Verify Email</span><br/>
          <span className="num">3.</span><span className="instruction">Login</span><br/>
          <span className="num">4.</span><span className="instruction">Add Item</span><br/>
          <span className="num">5.</span><span className="instruction">Search For Items</span><br/>
          <span className="num">6.</span><span className="instruction">Logout</span><br/>
        </div>
      </div>
    );
  }
}

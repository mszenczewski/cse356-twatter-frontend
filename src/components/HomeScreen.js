import React, { Component } from 'react';

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="content_box">
        <h3>Welcome!</h3>
        <div id="instructions">
          <h4>How To Use:</h4>
          <span className="num">1.</span><span>Add User</span><br/>
          <span className="num">2.</span><span>Verify Email</span><br/>
          <span className="num">3.</span><span>Login</span><br/>
          <span className="num">4.</span><span>Add Item</span><br/>
          <span className="num">5.</span><span>Search For Items</span><br/>
          <span className="num">6.</span><span>Logout</span><br/>
        </div>
      </div>
    );
  }
}

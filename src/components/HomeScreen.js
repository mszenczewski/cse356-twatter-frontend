import React, { Component } from 'react';

export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <div id="instructions">
          <h4>Milestone 2 Items:</h4>
          <span className="num">1.</span><span className="instruction">New search options under Search tab</span><br/>
          <span className="num">2.</span><span className="instruction">Follow under Follow tab</span><br/>
          <span className="num">3.</span><span className="instruction">Delete item under Item tab (after searching)</span><br/>
          <span className="num">4.</span><span className="instruction">User GET requests under User tab (after searching)</span><br/>
        </div>
      </div>
    );
  }
}

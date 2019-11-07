import React, { Component } from 'react';

export default class SearchResults extends Component {
  state = {
    display: ''
  }

  componentDidMount() {
    var s = '';
    for(var i = 0; i < this.props.items.length; i++) {
      s += this.props.items[i].username + ': ' + this.props.items[i].content + '\n'; 
    }
    this.setState({display: s});
  }

  render() {
    return (
      <div className="content_card">
        <h2>Search Reults</h2>
        <div>
          {this.state.display.split('\n').map((i,key) => {
            return <div className='search_result' key={key}>{i}</div>;
          })}
        </div>
      </div>
    );
  }
}

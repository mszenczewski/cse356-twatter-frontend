import React, { Component } from 'react';
import axios from 'axios';

export class SearchScreen extends Component {
  constructor(props) {
    super(props);

    let d = new Date();
    let t = d.getTime() / 1000; 

    this.state = {
      current_timestamp: t,
      timestamp: '',
      limit: '',
      results_header: '',
      results: ''
    }
  }

  handleTimestampChange = e => {
    this.setState({
      timestamp: e.target.value
    });
  };

  handleLimitChange = e => {
    this.setState({
      limit: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();

    const json = {};

    if (this.state.timestamp !== '') {
      json.timestamp = this.state.timestamp;
    }

    if (this.state.limit !== '') {
      json.limit = this.state.limit;
    }

    console.log('JSON: ' + JSON.stringify(json, null, 2));

    axios
      .post("http://gaillardia.cse356.compas.cs.stonybrook.edu/search", json)
      .then(res => {
        console.log('SEARCH RESPONSE: ' + JSON.stringify(res.data, null, 2));

        if (res.data.status === 'OK') {
          console.log(JSON.stringify(res.data.items, null, 2));

          this.setState({results_header: 'Search Results'});
          this.setState({results: ''});

          for (var i = 0; i < res.data.items.length; i++) {
            this.setState({results: this.state.results + res.data.items[i].content + '\n'});
          }

        } else {
          this.setState({results_header: ''});
          this.setState({results: res.data.error}); 
        }
      })
      .catch(err => {
        console.log('SEARCH ERROR: ' + err);
      });
  };


  render() {
    return (
      <div>
        <h2>Search</h2>
        <h5>Current Timestamp: {this.state.current_timestamp}</h5>
        <form onSubmit={this.submit}>
          <div>
            <label htmlFor="timestampInput">Timestamp: </label>
            <input
              id="timestampInput"
              onChange={this.handleTimestampChange}
              type="text"
              value={this.state.timestamp}
            />
          </div>
          <div>
            <label htmlFor="limitInput">Limit: </label>
            <input
              id="limitInput"
              onChange={this.handleLimitChange}
              type="text"
              value={this.state.limit}
            />
          </div>
          <button>Submit</button>
        </form>
        <h3>{this.state.results_header}</h3>
        <div>
          {this.state.results.split("\n").map((i,key) => {
            return <div key={key}>{i}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default SearchScreen;
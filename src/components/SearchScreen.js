import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import axios from 'axios';

export default class SearchScreen extends Component {
  constructor(props) {
    super(props);

    let d = new Date();
    let t = Math.floor(d.getTime() / 1000); 

    this.state = {
      current_timestamp: t,
      timestamp: '',
      limit: '',
      following: false,
      results_header: '',
      results: ''
    }
  }

  tick() {
    this.setState(prevState => ({
      current_timestamp: prevState.current_timestamp + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timestamp_change = e => {
    this.setState({
      timestamp: e.target.value
    });
  };

  limit_change = e => {
    this.setState({
      limit: e.target.value
    });
  };

  query_change = e => {
    this.setState({
      query: e.target.value
    });
  };

  following_change = e => {
    this.setState({
      following: e.target.checked
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

    if (this.state.query !== '') {
      json.q = this.state.query;
    }

    if (this.state.query !== '') {
      json.following = this.state.following;
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
      <div className="content_box">
        <h2>Search</h2>
        <div id="timestamp_box">        
          <h3 id="timestamp">Current Timestamp: {this.state.current_timestamp}</h3>
          <CopyToClipboard text={this.state.current_timestamp}>
              <button>Copy</button>
          </CopyToClipboard>
        </div>
        <form onSubmit={this.submit}>
            <label htmlFor="timestampInput">Timestamp: </label>
            <input
              id="timestampInput"
              onChange={this.timestamp_change}
              type="text"
              value={this.state.timestamp}
            />
            <label htmlFor="limitInput">Limit: </label>
            <input
              id="limitInput"
              onChange={this.limit_change}
              type="text"
              value={this.state.limit}
            />
            <label htmlFor="queryInput">Query: </label>
            <input
              id="queryInput"
              onChange={this.query_change}
              type="text"
              value={this.state.query}
            />
            <label htmlFor="followingInput">Following: </label>
            <input 
              id="followingInput"
              onChange={this.following_change}
              type="checkbox"
              value={this.state.query}
            />
          <button>Submit</button>
        </form>
        <h3>{this.state.results_header}</h3>
        <div id='results'>
          {this.state.results.split('\n').map((i,key) => {
            return <div className="results_item" key={key}>{i}</div>;
          })}
        </div>
      </div>
    );
  }
}

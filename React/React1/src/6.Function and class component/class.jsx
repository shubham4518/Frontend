
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Shubham',
      count: 0
    };
  }

  changeName = () => {
    this.setState({
      name: 'Rahul'
    });
  };

  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>

        <h2>Student Name: {this.state.name}</h2>

        <p>Button clicked: {this.state.count} times</p>

        <button onClick={this.changeName}>
          Change Name
        </button>

        <button
          onClick={() =>
            this.setState({ count: this.state.count + 1 })
          }
        >
          Click Me
        </button>
      </div>
    );
  }
}

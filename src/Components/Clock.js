import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }

  render() {
    return  (
    <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }

  componentDidMount() {
      setInterval(() => this.tick , 1000);
  }
  componentWillUnmount(){
      clearInterval();
  }

  tick() {
      this.setState({ date: new Date() });
  }
}

export default Clock;

import React, { Component } from 'react';

class State extends Component {
  // store the number in object
  constructor() {
    super();
    this.state = { num: 0 };
  }

  // increment function
  inc = () => {
    this.setState(()=>({
      num: this.state.num + 1
    }))
  }

  // decrement function
  dec = () => {
    this.setState(()=>({
      num: this.state.num - 1
    }))
  }

  // reset function
  reset= () => {
    this.setState(()=>({
      num: this.state.num = 0
    }))
  }

  render() {
    return (
      <div className='state'>
        <h1>Increment decrement state</h1>
        <h1>{this.state.num}</h1>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button><br/>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

export default State;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { stat } from 'fs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component{

  state = {
    count: 0,
  };

  handleClick = ()=>{
    this.setState(({ count })=>({
      count: count + 1,
    })); 
  }
  render(){
    return <button onClick={this.handleClick}>{this.state.count}{this.state.count== 1?' like':' likes'}</button>
  }
}

export default App;

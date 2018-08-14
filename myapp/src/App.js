import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state ={
    ninjas : [
      { name:'Salim', age: 23, belt: 'platinum', id: 1 },
      { name: 'Zainab', age: 10, belt: 'purple', id: 2 },
      { name: 'Nazim', age: 9, belt: 'black', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React App!</h1>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;

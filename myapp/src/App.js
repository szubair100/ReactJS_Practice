import React, { Component } from 'react';
import Ninjas from './Ninja';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App!</h1>
        <p>Welcome</p>
        <Ninjas name="Salim" age="18" belt="white"/>
      </div>
    );
  }
}

export default App;

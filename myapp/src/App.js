import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

// Container Component; we use it because it uses 
// a state (data that doesnt need to pass).
class App extends Component {
  state ={
    ninjas : [
      { name:'Salim', age: 23, belt: 'platinum', id: 1 },
      { name: 'Zainab', age: 10, belt: 'purple', id: 2 },
      { name: 'Nazim', age: 9, belt: 'black', id: 3 }
    ]
  }

  // Non-destructive
  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let ninjasCopy = [...this.state.ninjas, newNinja];
    this.setState({
      ninjas: ninjasCopy
    })
  }
  // Non-destructive
  deleteNinja =(id) => {
    let ninjasCopy = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjasCopy
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React App!</h1>
        <p>Welcome</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja}/>
      </div>
    );
  }
}

export default App;

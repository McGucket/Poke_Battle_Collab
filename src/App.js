import React, { Component } from 'react';
var Pokedex = require('./Pokedex');

class App extends Component {
  render() {
    return (
      <div className="App">
       <Pokedex />
      </div>
    );
  }
}

export default App;

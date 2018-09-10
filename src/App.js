import React, { Component } from 'react';
var Home = require('./Home');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');

class App extends Component {
  render() {
    return (
       <Router>
<div className="App">
      <Nav />
      <Route path='/' component={Home}/>
      </div>
       </Router>
      
    );
  }
}

export default App;

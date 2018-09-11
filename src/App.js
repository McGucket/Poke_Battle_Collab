import React, { Component } from 'react';
var Home = require('./Home');
var Instructions = require('./Instructions');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
       <Router>
<div className="App">
      <Nav />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/instruction' component={Instructions}/>
      <Route render={function() {
                    return <p>Not Found</p>
                }} />
      </Switch>
      </div>
       </Router>
      
    );
  }
}

export default App;

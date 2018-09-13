import React, { Component } from 'react';
var Home = require('./Home');
var Instructions = require('./Instructions');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');
var Switch = ReactRouter.Switch;
var Pokedex = require('./Pokedex');
var SelectPokemon = require('./SelectPokemon');
var Entry = require('./Entry');
var Battle = require('./Battle')


class App extends Component {
  render() {
    return (

       <Router>
<div className="App">
      <Nav />
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Instructions' component={Instructions}/>
      <Route path='/Pokedex' component={Pokedex}/>
      <Route path='/SelectPokemon' component={SelectPokemon}/>
      <Route exact path='/Entry/:id' component={Entry}/>
      <Route path='/Battle' component={Battle} />
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

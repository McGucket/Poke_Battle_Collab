import React, { Component } from 'react';

const ReactRouter = require('react-router-dom');
const Home = require('./Home.jsx');
const Instructions = require('./Instructions.jsx');

const Router = ReactRouter.BrowserRouter;
const { Route } = ReactRouter;
const Nav = require('./Nav');

const { Switch } = ReactRouter;
const Pokedex = require('./Pokedex');
const SelectPokemon = require('./SelectPokemon');
const Entry = require('./Entry');
const Battle = require('./Battle');


class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (

      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Instructions" component={Instructions} />
            <Route path="/Pokedex" component={Pokedex} />
            <Route path="/SelectPokemon" component={SelectPokemon} />
            <Route exact path="/Entry/:id" component={Entry} />
            <Route path="/Battle" component={Battle} />


          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;

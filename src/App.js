import React, { Component } from 'react';

const ReactRouter = require('react-router-dom');
const Home = require('./Home');
const Instructions = require('./Instructions');

const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Nav = require('./Nav');

const Switch = ReactRouter.Switch;
const Pokedex = require('./Pokedex');
const SelectPokemon = require('./SelectPokemon');
const Entry = require('./Entry');
const Battle = require('./Battle');


class App extends Component {
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
            <Route render={function () {
              return <p>Not Found</p>;
            }}
            />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;

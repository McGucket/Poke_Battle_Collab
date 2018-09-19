const React = require('react');
const {Link} = require('react-router-dom');
const PropTypes = require('prop-types');
const pokeApi = require('./api/pokeapi');
const header = require('./PicturesUsed/Pokedex.png');

function GetPokemons(props) {
  return (
    <div className="pokedexBack">
      <ul className="dexList">
        {props.pokemons.map(pokemon => (
          <li key={pokemon.id}>
            <Link to={`/Entry/${pokemon.id}`}><img src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width="200" /></Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

GetPokemons.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    pokeApi.fetchAllPokemons()
      .then((pokemons) => {
        this.setState(() => ({
          pokemons,
        }));
      });
  }

  render() {
    return (
      <div>
        <img className="pokedex_header" src={header} alt="title" />
        <h2 className="selectHeader">Select a Pokemon to view its entry file</h2>

        <GetPokemons pokemons={this.state.pokemons} />
      </div>
    );
  }
}

module.exports = Pokedex;

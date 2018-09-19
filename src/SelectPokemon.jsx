const React = require('react');
const { Link } = require('react-router-dom');
// const PropTypes = require('prop-types');
const pokeApi = require('./api/pokeapi');
const header = require('./PicturesUsed/PokeBattleTitle.png');

class GetCharacters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      battleArr: [],
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    const { id } = event.target;
    const { battleArr } = this.state;
    const battleArray = battleArr.concat([id]);
    battleArray.splice(2, 1);
    this.setState(() => ({
      battleArr: battleArray,


    }));
  }

  render() {
    const { battleArr } = this.state;
    const { pokemons } = this.props;

    return (
      <div>
        {battleArr.length === 0
          ? <h2 className="selectPokemonHeader">Choose Your Pokemon!</h2>
          : <h2 className="selectPokemonHeader2">Choose Enemy Pokemon! (Press the Pokeball when done!)</h2>
                }
        <div className="pokedexBack">
          <ul className="dexList">
            {pokemons.map(pokemon => (
              <li key={pokemon.id}>
                <input type="image" className="select_pokemon" id={pokemon.id} onClick={this.handleOnClick.bind(this)} onKeyPress={this.handleOnClick.bind(this)} src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width="200" />
              </li>

            ))}


          </ul>
        </div>
        {battleArr.length >= 2
                && (
                <div className="battleBTN">
                  <Link
                    className="battleLink"
                    to={{
                      pathname: '/Battle',
                      search: `?HeroPokemon=${battleArr[0]}&EnemyPokemon=${battleArr[1]}`,
                    }}
                  >
Battle
                  </Link>
                </div>
                )}
      </div>
    );
  }
}

// GetCharacters.propTypes = {
//   id: PropTypes.number,
//   imgSrcFront: PropTypes.string,
//   pokemonName: PropTypes.string,
// };


class SelectPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
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
        <img className="pokemonbattle_header" src={header} alt="title" />
        <GetCharacters pokemons={this.state.pokemons} />

      </div>
    );
  }
}

module.exports = SelectPokemon;

const React = require('react');
const Link = require('react-router-dom').Link;
const PropTypes = require('prop-types');
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
    const id = event.target.id;
    const battleArray = this.state.battleArr.concat([id]);
    battleArray.splice(2, 1);
    this.setState(() => ({
      battleArr: battleArray,


    }), () => console.log(this.state.battleArr));
  }

  render() {
    return (
      <div>
        {this.state.battleArr.length === 0
          ? <h2 className="selectPokemonHeader">Choose Your Pokemon!</h2>
          : <h2 className="selectPokemonHeader2">Choose Enemy Pokemon! (Press the Pokeball when done!)</h2>
                }
        <div className="pokedexBack">
          <ul className="dexList">
            {this.props.pokemons.map(pokemon => (
              <li key={pokemon.id}>
                <img className="select_pokemon" id={pokemon.id} onClick={this.handleOnClick.bind(this)} src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width="200" />
              </li>

            ))}


          </ul>
        </div>
        {this.state.battleArr.length >= 2
                && (
                <div className="battleBTN">
                  <Link
                    className="battleLink"
                    to={{
                      pathname: '/Battle',
                      search: `?HeroPokemon=${this.state.battleArr[0]}&EnemyPokemon=${this.state.battleArr[1]}`,
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

GetCharacters.propTypes = {
  id: PropTypes.number,
  imgSrcFront: PropTypes.string,
  pokemonName: PropTypes.string,
};


class SelectPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      selectPokemons: [],
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

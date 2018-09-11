var header = require('./PicturesUsed/Pokedex.png');
var React = require('react');
var pokeApi = require('./api/pokeapi');
var Link = require('react-router-dom').Link;

function GetPokemons(props) {
    return (
        <div className='pokedexBack'>
            <ul className="dexList">
                {props.pokemons.map(function (pokemon) {
                    return (
                        <li key={pokemon.dexNo} onClick={() => saveDexNo(pokemon.pokemonName)}>
                            <Link to='#'><img src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width='200' /></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


function saveDexNo(pokedexNo) {
    return sessionStorage.setItem('pokeName', pokedexNo);
}

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: [],
            pokeResult: [],
            pokeEntry: ""
        };
    }

    componentDidMount() {
        pokeApi.getPokedexData();
        pokeApi.fetchAllPokemons()
            .then(function (pokemons) {
                this.setState(function () {
                    return {
                        pokemons
                    }
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <img className="pokedex_header" src={header} alt="title" />
                <h2 className='selectHeader'>Select a Pokemon to view its entry file</h2>

                <GetPokemons pokemons={this.state.pokemons} />
            </div>
        )
    }
}

module.exports = Pokedex;
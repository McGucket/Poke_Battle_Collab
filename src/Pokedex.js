var header = require('./PicturesUsed/Pokedex.png');
var React = require('react');
var PropTypes = require('prop-types');
var pokeApi = require('./api/pokeapi');
var Link = require('react-router-dom').Link;

function GetPokemons(props) {
    console.log("List of Poke : ", this)
    return (
        <div className='pokedexBack'>
            <ul className="dexList">
                {props.pokemons.map(function (pokemon) {
                    return (
                        <li key={pokemon.dexNo}>
                            <Link to='/instructions'><img src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width='200' /></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

class Pokedex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemons: []
        };
    }

    componentDidMount() {
        pokeApi.fetchAllPokemons()
            .then(function (pokemons) {
                this.setState(function () {
                    return {
                        pokemons
                    }
                });
            }.bind(this))
    }





    render() {
        console.log("List of Pokemons", this.state.pokemons)
        return (
            <div>
                <img className="pokedex_header" src={header} alt="title" />
                <h2 className='selectHeader'>Select a Pokemon to view its entry file</h2>

                <GetPokemons pokemons={this.state.pokemons} />
            </div>
        )
    }
}

Pokedex.propTypes = {
    pokemons: PropTypes.array.isRequired
}

module.exports = Pokedex;
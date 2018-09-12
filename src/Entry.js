var header = require('./PicturesUsed/Pokedex.png');
var React = require('react');
var pokeApi = require('./api/pokeapi');
var Loading = require('./Loading');

function GetEntry(props) {
    console.log(props.pokeData)
    return (
        <div className='pokedexBack'>
            {props.pokeData.map(function (pokemon) {
                return (
                    <li key={pokemon.id}>
                        {pokemon.pokemonName}
                    </li>
                )
            })}
        </div>
    )
}

class Entry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: [],
            pokeId: null
        }
    }

    componentDidMount() {
        pokeApi.getPokedexData()
            .then(function (pokemon) {
                this.setState(function () {
                    return {
                        pokemon
                    }
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <img className="pokedex_header" src={header} alt="title" />
                {!this.state.pokemon ?
                    <Loading text='Retreiving Pokedex Data' /> :
                    <GetEntry pokeData={this.state.pokemon} />
                }
            </div>
        )
    }
}

module.exports = Entry;
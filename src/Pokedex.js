var React = require('react');
var PropTypes = require('prop-types');
var pokeApi = require('./api/pokeapi');
var axios = require('axios');

function GetPokemons(props) {
    console.log("List of Poke : ", this)
    return (
            <ul className="dexList">
                {props.pokemons.map(function (pokemon) {
                    return (
                        <li key={pokemon.dexNo}>
                            <img src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width='200' />
                        </li>
                    )
                })}
            </ul>
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
        // axios.get("https://api.myjson.com/bins/1eln1c")
        //     .then(res => {
        //         this.setState({ pokemons: res.data.Pokemon });
        //     });
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
            <GetPokemons pokemons={this.state.pokemons} />
        )
    }
}

// Pokedex.propTypes = {
//     pokemons: PropTypes.array.isRequired
// }

module.exports = Pokedex;
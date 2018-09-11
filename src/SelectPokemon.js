var header = require('./PicturesUsed/PokeBattleTitle.png');
var React = require('react');
var PropTypes = require('prop-types');
var pokeApi = require('./api/pokeapi');
var Link = require('react-router-dom').Link;

// class SelectHeroPokemon extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             heroPokemon:""
//         }
//     }

//     render(){
//         return(
            
//         )
//     }

// }


function GetPokemons(props) {
    console.log("List of Poke : ", this)
    return (
        <div className='pokedexBack'>
            <ul className="dexList">
                {props.pokemons.map(function (pokemon,index) {
                    return (
                        <li key={index}>
                            <Link to='/instructions'><img src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width='200' /></Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}



class SelectPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: []
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(index) {
    //     this.setState(function () {
    //         sessionStorage.setItem('')
    //     });
    // }

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
                <img className="pokemonbattle_header" src={header} alt="title" />
                <h2 className='selectPokemonHeader'>Choose Your Pokemon!</h2>

                <GetPokemons pokemons={this.state.pokemons} />
            </div>
        )
    }
}

SelectPokemon.propTypes = {
    pokemons: PropTypes.array.isRequired
}

module.exports = SelectPokemon;
var header = require('./PicturesUsed/PokeBattleTitle.png');
var React = require('react');
var PropTypes = require('prop-types');
var pokeApi = require('./api/pokeapi');
var Link = require('react-router-dom').Link;




function GetPokemons(props) {

    return (
        <div className='pokedexBack'>
            <ul className="dexList">
                {props.pokemons.map(function (pokemon) {
                    return (
                        <li key={pokemon.id} onClick={props.handleDisplay}>
                            <Link to='#'><img src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width='200' /></Link>
                        </li>

                    )
                })}


            </ul>
        </div>
    )
}

function saveDexNo(pokedexNo) {
    return sessionStorage.setItem('pokeId', pokedexNo);
}





class SelectPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            display: true
        }
        this.handleDisplay= this.handleDisplay.bind(this);
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

    handleDisplay() {
        return(
        this.setState({
            display: false
        })
        )
    }


    render() {
        var displayStatus = this.state.display;

        return (
            <div>
                    <img className="pokemonbattle_header" src={header} alt="title" />
                    <h2 className='selectPokemonHeader'>Choose Your Pokemon!</h2>

                    {/* {displayStatus === true ? 
                    <Loading /> :
                     <GetPokemons pokemons={this.state.pokemons} display={this.state.display} handleDisplay={this.handleDisplay}/>}
                    */}

                   
                
                

               
            </div>
        )
    }
}

module.exports = SelectPokemon;
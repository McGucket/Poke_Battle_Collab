var header = require('./PicturesUsed/PokeBattleTitle.png');
var React = require('react');
var pokeApi = require('./api/pokeapi');
var Link = require('react-router-dom').Link;


class PlayerInput extends React.Component{
    constructor(props){
        super(props);

        this.state={
            pokemonId: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
      
    }
}



function GetPokemons(props) {

    return (
        <div className='pokedexBack'>
            <ul className="dexList">
                {props.pokemons.map(function (pokemon) {
                    return (
                        <li key={pokemon.id} onClick={() => saveDexNo(pokemon.id)}>
                            <Link to='#'><img src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width='200' /></Link>
                        </li>

                    )
                })}


            </ul>
        </div>
    )
}

function saveDexNo(pokedexNo) {
    return sessionStorage.setItem('userPokeId', pokedexNo);
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

        return (
            <div>
                    <img className="pokemonbattle_header" src={header} alt="title" />
                    {!sessionStorage.getItem('userPokeId') ? 
                    <h2 className='selectPokemonHeader'>Choose Your Pokemon!</h2>
                     :
                   <h2 className='selectPokemonHeader'>Choose Enemy Pokemon!</h2>
                   }
                    

                     <GetPokemons pokemons={this.state.pokemons} display={this.state.display} handleDisplay={this.handleDisplay}/>
               
            </div>
        )
    }
}

module.exports = SelectPokemon;
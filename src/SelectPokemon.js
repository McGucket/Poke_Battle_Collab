var header = require('./PicturesUsed/PokeBattleTitle.png');
var React = require('react');
var pokeApi = require('./api/pokeapi');
var Link = require('react-router-dom').Link;
var PropTypes = require('prop-types');

class GetCharacters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            battleArr: [],
            counter: 0
        }

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(event) {
        let id = event.target.id
        this.setState({
            battleArr: [this.state.battleArr, id],
            // battleArr:[id]
            counter: this.state.counter + 1

        }, () => console.log(this.state.battleArr[1]))

    }

    render() {
        return (
            <div>
                {this.state.counter === 0 ?
                    <h2 className='selectPokemonHeader'>Choose Your Pokemon!</h2>
                    :
                    <h2 className='selectPokemonHeader2'>Choose Enemy Pokemon! (Press the Pokeball when done!)</h2>
                }
                <div className='pokedexBack'>
                    <ul className="dexList">
                        {this.props.pokemons.map((pokemon) => {
                            return (
                                <li key={pokemon.id}>
                                    <img className='select_pokemon' id={pokemon.id} onClick={this.handleOnClick.bind(this)} src={pokemon.imgSrcFront} alt={pokemon.pokemonName} width='200' />
                                </li>

                            )
                        })}


                    </ul>
                </div>
                {this.state.counter === 2 &&
                <div className='battleBTN'>
                    <Link className='battleLink' to={{
                        pathname: '/Battle',
                        search: '?HeroPokemon=' + this.state.battleArr[1] + '&EnemyPokemon=' + this.state.battleArr[0][1]
                    }}>Battle</Link>
                </div>}
            </div>
        );
    }
}

GetCharacters.propTypes = {
    id: PropTypes.number,
    imgSrcFront: PropTypes.string,
    pokemonName: PropTypes.string
}



class SelectPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            selectPokemons: []
        }
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
        return (
            <div>
                <img className="pokemonbattle_header" src={header} alt="title" />
                <GetCharacters pokemons={this.state.pokemons} />

            </div>
        )
    }
}

module.exports = SelectPokemon;
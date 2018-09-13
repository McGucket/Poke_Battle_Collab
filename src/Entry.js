var header = require('./PicturesUsed/Pokedex.png');
var React = require('react');
var pokeApi = require('./api/pokeapi');
var PropTypes = require('prop-types');
var Loading = require('./Loading');
var logo = require('./PicturesUsed/pokeballPicture.png');

function GetEntry(props) {
    let entryData = Object.values(props.pokeData);
    console.log('Entry',entryData)
    return (
        <div className='pokedexBack'>
            <div className='entry_layout'>
                <div className='entry_head'><a href='/Pokedex'>Back to Pokedex Page &#8630;</a></div>
                <div className='entry_article'>

                    <div className='entry_float'>
                        <div className='entry_left'>
                            <img src={entryData[4]} title='Pokemon' alt='Pokemon' width='250' />
                        </div>

                        <div className='entry_right'>
                            <img className="pokeballpicture" src={logo} title='Pokeball' alt='Pokemonball' width='50' height='50' />
                            <p className="pokedexNumber">#00{entryData[0]}</p>
                            <p className="pokemonName">{entryData[1]}</p>
                            <p className="pokemonCategory">{entryData[6]}</p>
                            <p className="pokemonType">{entryData[2]}</p>

                        </div>
                    </div>
                    <div className='entry_desc'>{entryData[3]}</div>
                </div>
            </div>
        </div>
    )
}

GetEntry.propTypes = {
    entryData: PropTypes.array.isRequired
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
        const { match: { params } } = this.props;
        let entryId = params.id;

        pokeApi.getPokedexData(entryId)
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
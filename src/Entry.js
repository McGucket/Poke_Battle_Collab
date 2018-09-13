var header = require('./PicturesUsed/Pokedex.png');
var React = require('react');
var pokeApi = require('./api/pokeapi');
var Loading = require('./Loading');

function GetEntry(props) {
    let entryData = Object.values(props.pokeData);
    // console.log("EntryData : ", entryData[1]);
    return (
        <div className='pokedexBack'>
            <p>
                {entryData[0]}
            </p><br />
            <p>
                {entryData[1]} , {entryData[2]}
            </p>
            <img src={entryData[4]} /><br />
            <p>{entryData[3]}</p>
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
const React = require('react');
const PropTypes = require('prop-types');
const header = require('./PicturesUsed/Pokedex.png');
const pokeApi = require('./api/pokeapi');
const Loading = require('./Loading');
const logo = require('./PicturesUsed/pokeballPicture.png');

function GetEntry(props) {
  const entryData = props.pokeData;
  return (
    <div className="pokedexBack">
      <div className="entry_layout">
        <div className="entry_head"><a href="/Pokedex">Back to Pokedex Page &#8630;</a></div>
        <div className="entry_article">

          <div className="entry_float">
            <div className="entry_left">
              <img src={entryData.imgSrcFront} title="Pokemon" alt="Pokemon" width="250" />
            </div>

            <div className="entry_right">
              <img className="pokeballpicture" src={logo} title="Pokeball" alt="Pokemonball" width="50" height="50" />
              <p className="pokedexNumber">
#00
                {entryData.id}
              </p>
              <p className="pokemonName">{entryData.pokemonName}</p>
              <p className="pokemonCategory">{entryData.pokemonCategory}</p>
              <p className="pokemonType">{entryData.pokemonType}</p>

            </div>
          </div>
          <div className="entry_desc">{entryData.pokemonDesc}</div>
        </div>
      </div>
    </div>
  );
}

GetEntry.propTypes = {
  entryData: PropTypes.array.isRequired,
};

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      pokeId: null,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const entryId = params.id;

    pokeApi.getPokedexData(entryId)
      .then((pokemon) => {
        this.setState(() => ({
          pokemon,
        }));
      });
  }

  render() {
    return (
      <div>
        <img className="pokedex_header" src={header} alt="title" />
        {!this.state.pokemon
          ? <Loading text="Retreiving Pokedex Data" />
          : <GetEntry pokeData={this.state.pokemon} />
                }
      </div>
    );
  }
}

module.exports = Entry;

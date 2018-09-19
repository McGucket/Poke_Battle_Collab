const React = require('react');
const { Link } = require('react-router-dom');
const logo = require('./PicturesUsed/PokemonLogo.png');
const closepokeball = require('./PicturesUsed/ClosePokeball.png');
const halfpokeball = require('./PicturesUsed/HalfOpenPokeballPikachu.png');

/* global Audio */
const pikachusound = new Audio();
pikachusound.src = require('./PicturesUsed/pikachufx.mp3');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: closepokeball,
    };
  }

  render() {
    const { img } = this.state;

    return (
      <div className="home-container">
        <img className="pokemonlogo" src={logo} alt="Logo" width="800px" height="300px" />

        <Link className="button" to="/Instructions">
          <input
            type="image"
            src={img}
            alt="Button to go to Instructions page"
            onMouseEnter={() => {
              this.setState({ img: halfpokeball });
            }}
            onMouseLeave={() => {
              this.setState({ img: closepokeball });
            }}
            onClick={() => pikachusound.play()}
            height="120"
            width="120"
          />
        </Link>
      </div>

    );
  }
}


module.exports = Home;

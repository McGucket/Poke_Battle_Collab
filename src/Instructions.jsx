const React = require('react');
const { Link } = require('react-router-dom');
const instructionslogo = require('./PicturesUsed/InstructionsTitlePikachu.png');
const closepokeball = require('./PicturesUsed/ClosePokeball.png');
const halfpokeball = require('./PicturesUsed/HalfOpenPokeballPikachu.png');

/* global Audio */
const pikachusound = new Audio();
pikachusound.src = require('./PicturesUsed/pikachufx.mp3');


class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: closepokeball,
    };
  }

  render() {
    const { img } = this.state;
    return (
      <div className="instructions-container">
        <img src={instructionslogo} alt="Logo" width="650px" height="190px" />

        <p>1) Select the first pokemon you want use</p>
        <p>2) Select the pokemon you would like to battle against</p>
        <p>
3) Select moves provided for your pokemon and get
          <br />
          {' '}
the enemy pokemons health to 0 to win!
        </p>

        <Link className="Instructionbutton" to="/SelectPokemon">
          <input
            type="image"
            src={img}
            alt="btn to go to select screen"
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

module.exports = Instructions;

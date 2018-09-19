/* eslint max-len: ["error", { "code": 300 }] */

const React = require('react');
const queryString = require('query-string');
const { Link } = require('react-router-dom');
const { wobble } = require('react-animations');
const Radium = require('radium');
const { StyleRoot } = require('radium');
const { Redirect } = require('react-router');
const $ = require('jquery');
const PropTypes = require('prop-types');
const pokeApi = require('../src/api/pokeapi');
const battleMusic = require('./battleMusic');


const styles = {
  wobble: {
    animation: 'x 1s',
    animationName: Radium.keyframes(wobble, 'wobble'),
  },
};


function RedirectingClassHomePage() {
  battleMusic.stopMusic();
  return (
    <Redirect to="/" />

  );
}

function RedirectingClassSelectPokemon() {
  battleMusic.stopMusic();
  return (
    <Redirect to="/SelectPokemon" />
  );
}

class HeroPokemon extends React.Component {
  render() {
    const { hero } = this.props;
    const skills = hero.pokemonSkills;
    const { heroHealth } = this.props;
    const { calculateDmg } = this.props;

    const style = {
      hero: {
        backgroundColor: '#12e23b',
        borderRadius: '10px',
        width: `${heroHealth * 1.5}px`,
        height: '20px',
        border: 'white 2px solid',

      },
    };

    function animateFwd() {
      $('.hero_sprite').css('transform', 'translateX(40px)');
      $('.enemy_sprite').css('transform', 'translateX(40px)');
    }

    function animateBack() {
      $('.hero_sprite').css('transform', 'translateX(-40px)');
      $('.enemy_sprite').css('transform', 'translateX(-40px)');
    }

    function heroAttack() {
      animateFwd();
      setTimeout(animateBack, 100);
    }


    return (
      <div className="hero_Box">
        <StyleRoot>
          <img className="hero_sprite" src={hero.imgSrcBack} title="HeroPokemon" alt="Your Pokemon Here" width="500" style={styles.wobble} />
        </StyleRoot>
        <div className="hero_Stats">
          <span className="sprite_Name">{hero.pokemonName}</span>
          <br />
          <div className="pokemon_Health" style={style.hero} />
          <p style={{ textAlign: 'right' }}>
            HP :
            {heroHealth}
            &ensp;/&ensp;200
          </p>
        </div>
        <table className="moveset_tb">
          <tbody>
            <tr>
              <td className="td_left_top"><button type="button" className="skillBtn" onClick={() => calculateDmg(heroAttack())} onKeyPress={() => calculateDmg(heroAttack())}>{skills[0]}</button></td>

              <td className="td_right_top"><button type="button" className="skillBtn" onClick={() => calculateDmg(heroAttack())} onKeyPress={() => calculateDmg(heroAttack())}>{skills[1]}</button></td>

              <td className="run_option" rowSpan="2"><Link className="runBTN" to="/SelectPokemon" onClick={() => battleMusic.stopMusic()}>Run Away</Link></td>

            </tr>
            <tr>
              <td className="td_left_bot"><button type="button" className="skillBtn" onClick={() => calculateDmg(heroAttack())} onKeyPress={() => calculateDmg(heroAttack())}>{skills[2]}</button></td>

              <td className="td_right_bot"><button type="button" className="skillBtn" onClick={() => calculateDmg(heroAttack())} onKeyPress={() => calculateDmg(heroAttack())}>{skills[3]}</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

HeroPokemon.propTypes = {
  hero: PropTypes.shape,
  heroHealth: PropTypes.number,
  calculateDmg: PropTypes.func,
};

class EnemyPokemon extends React.Component {
  render() {
    const { enemy } = this.props;
    const { enemyHealth } = this.props;


    const style = {
      enemy: {
        backgroundColor: '#12e23b',
        borderRadius: '10px',
        width: `${enemyHealth * 1.5}px`,
        height: '20px',
        border: 'white 2px solid',
      },
    };

    return (

      <div className="enemy_Box">
        <div className="enemy_Stats">
          <span className="sprite_Name">{enemy.pokemonName}</span>
          <br />
          <div className="enemy_Health" style={style.enemy} />
          <p style={{ textAlign: 'right' }}>
            HP :
            {enemyHealth}
            &ensp;/&ensp;200
          </p>
        </div>
        <StyleRoot>
          <img className="enemy_sprite" src={enemy.imgSrcFront} title="EnemyPokemon" alt="Enemy Pokemon Here" width="500" style={styles.wobble} />
        </StyleRoot>
      </div>
    );
  }
}

EnemyPokemon.propTypes = {
  enemy: PropTypes.shape,
  enemyHealth: PropTypes.number,
};


class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroPokemon: [],
      enemyPokemon: [],
      heroHealth: 200,
      enemyHealth: 200,
      loading: true,
    };
    this.calculateDmg = this.calculateDmg.bind(this);
    this.dealDmgToHero = this.dealDmgToHero.bind(this);
  }

  componentDidMount() {
    /* eslint react/prop-types: 0 */
    const chosenPokemon = queryString.parse(this.props.location.search);
    pokeApi.fetchCombatants(
      chosenPokemon.HeroPokemon,
      chosenPokemon.EnemyPokemon,
    ).then((combatantResults) => {
      this.setState(() => ({
        heroPokemon: combatantResults[0],
        enemyPokemon: combatantResults[1],
        loading: false,
      }));
    });
  }

  dealDmgToHero() {
    const returnDmg = Math.floor(Math.random() * (50 - 1) + 1);
    this.setState(prevState => ({
      heroHealth: prevState.heroHealth - returnDmg,
    }));
  }

  calculateDmg() {
    const dmgValue = Math.floor(Math.random() * (60 - 1) + 1);
    setTimeout(this.dealDmgToHero, 300);
    this.setState(prevState => ({
      enemyHealth: prevState.enemyHealth - dmgValue,
    }));
  }

  render() {
    const { loading } = this.state;
    let popuptext;

    if (loading === true) {
      return (
        <p>Starting up your game..</p>
      );
    }

    if (this.state.heroHealth <= 0) {
      popuptext = window.confirm('Your pokemon has fainted! Try again?');
      if (popuptext === true) {
        return (
          <RedirectingClassSelectPokemon />
        );
      }

      if (popuptext === false) {
        return (
          <RedirectingClassHomePage />
        );
      }
    } else if (this.state.enemyHealth <= 0) {
      popuptext = window.confirm('Your pokemon has won! Want to try again?');
      if (popuptext === true) {
        return (
          <RedirectingClassSelectPokemon />
        );
      }

      if (popuptext === false) {
        return (
          <RedirectingClassHomePage />
        );
      }
    } else if (this.state.heroHealth && this.state.enemyHealth > 0) {
      battleMusic.playMusic();
      return (
        <div className="battleBox">
          <div className="battlegrounds">

            <EnemyPokemon enemy={this.state.enemyPokemon} enemyHealth={this.state.enemyHealth} />
            <HeroPokemon hero={this.state.heroPokemon} heroHealth={this.state.heroHealth} calculateDmg={this.calculateDmg} />
          </div>
        </div>
      );
    }
  }
}

module.exports = Battle;

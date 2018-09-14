var React = require('react');
var queryString = require('query-string');
var pokeApi = require('../src/api/pokeapi')

class HeroPokemon extends React.Component {
    render() {
        let hero = this.props.hero;
        console.log('Hero : ', hero);
        return (
            <div className='hero_Box'>
                <img className='hero_sprite' src={hero.imgSrcBack} title='HeroPokemon' alt='Your Pokemon Here' width='500' />
                <table className='moveset_tb'>
                    <tbody>
                        <tr>
                            <td className='td_left_top'>{skills[0]}</td>
                            <td className='td_right_top'>{skills[1]}</td>
                            <td className='run_option' rowSpan='2'>Run Away</td>
                        </tr>
                        <tr>
                            <td className='td_left_bot'>{skills[2]}</td>
                            <td className='td_right_bot'>{skills[3]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class EnemyPokemon extends React.Component {
    render() {
        let enemy = this.props.enemy; 
        console.log('Enemy : ', enemy)
        return (
            <div className='enemy_Box'>
            <img className='enemy_sprite' src={enemy.imgSrcFront} title='EnemyPokemon' alt='Enemy Pokemon Here' width='500' />

            </div>
        )
    }
}


class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            heroPokemon: [],
            enemyPokemon: [],
            heroHealth: 200,
            enemyHealth: 200,
            loading: true

        }
    }


    componentDidMount() {
        var chosenPokemon = queryString.parse(this.props.location.search);
        pokeApi.fetchCombatants(
            chosenPokemon.HeroPokemon,
            chosenPokemon.EnemyPokemon
        ).then(function (combatantResults) {
            this.setState(function () {
                return {
                    heroPokemon: combatantResults[0],
                    enemyPokemon: combatantResults[1],
                    loading: false
                }
            });
        }.bind(this));
    }


    render() {
        var loading = this.state.loading;
        console.log(loading);
        if (loading === true) {
            return (
                <p>Starting up your game..</p>
            )
        }
        else {
            return (
                <div className='battleBox'>
                    <div className='battlegrounds'>
                        <EnemyPokemon enemy={this.state.enemyPokemon} />
                        <HeroPokemon hero={this.state.heroPokemon} />
                    </div>
                </div>
            )
        }
    }
}

module.exports = Battle;
var React = require('react');
var queryString = require('query-string');
var pokeApi = require('../src/api/pokeapi')

class HeroPokemon extends React.Component {
    render() {
        let hero = this.props.hero;
        return (
            <div className='hero_Box'>
                <p>{hero}</p>
                <table className='moveset_tb'>
                    <tbody>
                        <tr>
                            <td className='td_left_top'>Move 1</td>
                            <td className='td_right_top'>Move 2</td>
                            <td className='run_option' rowSpan='2'>Run Away</td>
                        </tr>
                        <tr>
                            <td className='td_left_bot'>Move 3</td>
                            <td className='td_right_bot'>Move 4</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

class EnemyPokemon extends React.Component {
    render() {
        let enemy = this.props.enemy; //
        return (
            <div className='enemy_Box'>
                <p>{enemy}</p>
            </div>
        )
    }
}


class Battle extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            heroPokemon :[],
            enemyPokemon:[]

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
                        heroPokemon:combatantResults[0],
                        enemyPokemon:combatantResults[1]
                    }
                });
            }.bind(this));
    }


    render() {
        return (
            <div className='battleBox'>
                <div className='battlegrounds'>
                    <EnemyPokemon enemy={this.state.enemyPokemon} />
                    <HeroPokemon hero={heroName} />
                </div>
            </div>
        )
    }
}

module.exports = Battle;
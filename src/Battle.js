var React = require('react');
var queryString = require('query-string');
var pokeApi = require('../src/api/pokeapi')

class Battle extends React.Component {
    constructor(props){
        super(props);

        this.state={
            heroPokemon : 0,
            enemyPokemon:0
        }
    }


    componentDidMount() {
        var chosenPokemon = queryString.parse(this.props.location.search);
        pokeApi.fetchCombatants(
            chosenPokemon.HeroPokemon,
            chosenPokemon.EnemyPokemon
        )
    }


    render() {

        return (
            <div className='battleBox'>
                <div className='battlegrounds'>

                </div>
                <table>
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

module.exports = Battle;
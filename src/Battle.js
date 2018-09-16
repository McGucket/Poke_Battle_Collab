var React = require('react');
var queryString = require('query-string');
var pokeApi = require('../src/api/pokeapi');


class HeroPokemon extends React.Component {
    render() {


        let hero = this.props.hero;
        let skills = hero.pokemonSkills;
        let h_Health = this.props.heroHealth;

        var style = {
            hero: {
                backgroundColor: '#12e23b',
                borderRadius: '10px',
                width: (h_Health * 1.5) + 'px',
                height: '20px',
                border: 'white 2px solid'
            }
        };

        $('.td_left_top').click(function(){
            $('.hero_sprite').animate({border:"5px solid blue"});
        });


        return (
            <div className='hero_Box'>
                <img className='hero_sprite' src={hero.imgSrcBack} title='HeroPokemon' alt='Your Pokemon Here' width='500' />
                <div className='hero_Stats'>
                    <span className='sprite_Name'>{hero.pokemonName}</span><br />
                    <div className='pokemon_Health' style={style.hero}></div>
                    <p style={{ textAlign: "right" }}>{h_Health}&ensp;/&ensp;200</p>
                </div>
                <table className='moveset_tb'>
                    <tbody>
                        <tr>
                            <td className='td_left_top' onClick={() => this.props.calculateDmg()}>{skills[0]}</td>
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
        let e_Health = this.props.enemyHealth;


        var style = {
            enemy: {
                backgroundColor: '#12e23b',
                borderRadius: '10px',
                width: (e_Health * 1.5) + 'px',
                height: '20px',
                border: 'white 2px solid'
            }
        };

        return (
            <div className='enemy_Box'>
                <div className='enemy_Stats'>
                    <span className='sprite_Name'>{enemy.pokemonName}</span><br />
                    <div className='enemy_Health' style={style.enemy}></div>
                    <p style={{ textAlign: "right" }}>{e_Health}&ensp;/&ensp;200</p>
                </div>
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
        this.updateHealth = this.updateHealth.bind(this);
    }

    updateHealth() {
        let dmgValue = Math.floor(Math.random() * (60 - 1) + 1);
        this.setState({
            enemyHealth: this.state.enemyHealth - dmgValue
        })
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
        if (loading === true) {
            return (
                <p>Starting up your game..</p>
            )
        }
        else {
            return (
                <div className='battleBox'>
                    <div className='battlegrounds'>
                        <EnemyPokemon enemy={this.state.enemyPokemon} enemyHealth={this.state.enemyHealth} />
                        <HeroPokemon hero={this.state.heroPokemon} heroHealth={this.state.heroHealth} calculateDmg={this.updateHealth} />
                    </div>
                </div>
            )
        }
    }
}

module.exports = Battle;
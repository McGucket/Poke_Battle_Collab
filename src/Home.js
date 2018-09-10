var logo = require('./PicturesUsed/PokemonLogo.png');
var React = require('react');
var Link = require('react-router-dom').Link;


class Home extends React.Component {
    render() {
        return(
            <div className="This">
            <img src={logo} alt="Logo"/>
            <button><img src={require('./PicturesUsed/ClosePokeball.png')} alt="pokeball" onClick={this.myfunction} /></button>
            </div>
            
        )
    }
}

module.exports = Home;
var logo = require('./PicturesUsed/PokemonLogo.png');
var React = require('react');
var Link = require('react-router-dom').Link;

class Home extends React.Component {
    state={
        img: require('./PicturesUsed/ClosePokeball.png')
    }

    render() {
        return(
            <div className="This">
            <img className="pokemonlogo" src={logo} alt="Logo" width="800px" height="300px"/>

             <Link className='button' to='/instructions'>
            <img src={this.state.img} onMouseEnter={() => {
                                                     this.setState({ img:require('./PicturesUsed/HalfOpenPokeballPikachu.png')
                                                                    })
                                                          }} onMouseLeave={() => {
                                                              this.setState({img:require('./PicturesUsed/ClosePokeball.png')})
                                                                          }} height="120" width="120"/>
            </Link>
            </div>
            
        )
    }
}

module.exports = Home;
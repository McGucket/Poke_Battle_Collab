var logo = require('./PicturesUsed/PokemonLogo.png');
var React = require('react');
var Link = require('react-router-dom').Link;
var pikachusound = new Audio();
pikachusound.src =require('./PicturesUsed/pikachufx.mp3');

class Home extends React.Component {
    state={
        img: require('./PicturesUsed/ClosePokeball.png')
    }

    render() {
        return(
            <div className="home-container">
            <img className="pokemonlogo" src={logo} alt="Logo" width="800px" height="300px"/>

             <Link className='button' to='/Instructions'>
            <img src={this.state.img} alt='Button to go to Instructions page' onMouseEnter={() => {
                                                     this.setState({ img:require('./PicturesUsed/HalfOpenPokeballPikachu.png')
                                                                    })
                                                          }} onMouseLeave={() => {
                                                              this.setState({img:require('./PicturesUsed/ClosePokeball.png')})
                                                                          }} onClick={() => pikachusound.play()} height="120" width="120"/>
            </Link>
            </div>
            
        )
    }
}


module.exports = Home;
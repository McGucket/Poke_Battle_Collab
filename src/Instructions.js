var React = require('react');
var instructionslogo = require('./PicturesUsed/InstructionsTitlePikachu.png'); 
var Link = require('react-router-dom').Link;
var pikachusound = new Audio();
pikachusound.src =require('./PicturesUsed/pikachufx.mp3');


class Instructions extends React.Component{
    state={
        img: require('./PicturesUsed/ClosePokeball.png')
    }
    render(){
    return(
        <div className="instructions-container">
        <img src={instructionslogo} alt="Logo" width="650px" height="190px"/>
        
        <p>1) Select the first pokemon you want use</p>
        <p>2) Select the pokemon you would like to battle against</p>
        <p>3) Select moves provided for your pokemon and get<br></br> the enemy pokemons health to 0 to win!</p>

         <Link className='Instructionbutton' to='/SelectPokemon'>
            <img src={this.state.img} alt='btn to go to select screen' onMouseEnter={() => {
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

module.exports = Instructions;
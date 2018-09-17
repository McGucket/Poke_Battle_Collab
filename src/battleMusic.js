var backgroundMusic = new Audio();

module.exports = {

    playMusic: function () {
        backgroundMusic.src = require('./PicturesUsed/BackgroundMusic.mp3');
        backgroundMusic.play();
    },

    stopMusic: function () {
        backgroundMusic.src = "";
    }

}

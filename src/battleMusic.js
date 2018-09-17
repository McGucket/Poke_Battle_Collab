const backgroundMusic = new Audio();

module.exports = {

  playMusic() {
    backgroundMusic.src = require('./PicturesUsed/BackgroundMusic.mp3');
    backgroundMusic.play();
  },

  stopMusic() {
    backgroundMusic.src = '';
  },

};

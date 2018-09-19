/* global Audio */
const backgroundMusic = new Audio();

module.exports = {

  playMusic() {
    /* eslint-disable global-require */
    backgroundMusic.src = require('./PicturesUsed/BackgroundMusic.mp3');
    /* eslint-enable global-require */
    backgroundMusic.play();
  },

  stopMusic() {
    backgroundMusic.src = '';
  },

};

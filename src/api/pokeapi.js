var axios = require('axios');
var PropTypes = require('prop-types');
var jsonURL = window.encodeURI("https://api.myjson.com/bins/1eln1c"); //Not really needed, link is already a URL

module.exports = {
    fetchAllPokemons: function () {

        return axios.get(jsonURL)
            .then(response => {
                console.log("Poke-List", response.data.Pokemon);
                return response.data.Pokemon;
            });
    },
    getPokedexData: function (pokeName) {
        return axios.get(jsonURL)
            .then(response => {
                var pokeArr = response.data.Pokemon;
                console.log("Pokemon-List", pokeArr[3]);
            });
    }
}

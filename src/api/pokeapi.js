var axios = require('axios');
var PropTypes = require('prop-types');
var jsonURL = "http://localhost:3000/Pokemon"; //Not really needed, link is already a URL

module.exports = {
    fetchAllPokemons: function () {

        return axios.get(jsonURL)
            .then(response => {
                console.log(response.data);
                return response.data;
            });
    },
    getPokedexData: function () {
        var selectedPokemon = sessionStorage.getItem('pokeId')
        var searchURL = window.encodeURI(jsonURL + "/" + selectedPokemon)

        return axios.get(searchURL)
            .then(response => {
                var resp = response.data;
                return console.log(resp);
            })
    }
    
}


var axios = require('axios');
var jsonURL = "http://localhost:3000/Pokemon"; //Not really needed, link is already a URL
var radix = require('radix');

module.exports = {
    fetchAllPokemons: function () {

        return axios.get(jsonURL)
            .then(response => {
                return response.data;
            });
    },
    getPokedexData: function (entryId) {

        return axios.get(jsonURL)
            .then(response => {
                let results = response.data;
                let pokeArr = results.find(function (pokemon) {
                    if (pokemon.id === parseInt(entryId,radix))
                        return pokemon;
                })
                return pokeArr;
            });
    },

    fetchCombatants: function (heroId, enemyId) {
        let fetchURL;
        if (parseInt(heroId,radix) > parseInt(enemyId,radix)) {
            fetchURL = "http://localhost:3000/Pokemon" + "?id=" + enemyId + "&id=" + heroId + "&_sort=id&_order=desc"
        }
        else if (parseInt(heroId,radix) < parseInt(enemyId,radix)) {
            fetchURL = "http://localhost:3000/Pokemon" + "?id=" + enemyId + "&id=" + heroId + "&_sort=id&_order=asc"
        }
        return axios.get(fetchURL)
            .then(response => {
                let results = response.data;
                return results;
            })
    }

}


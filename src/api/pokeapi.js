var axios = require('axios');
var jsonURL = "http://localhost:3000/Pokemon"; //Not really needed, link is already a URL

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
                    if (pokemon.id === parseInt(entryId))
                        return pokemon;
                })
                return pokeArr;
            });
    },

    fetchCombatants: function (heroId, enemyId) {
        let fetchURL = "http://localhost:3000/Pokemon" + "?id=" + enemyId + "&id=" + heroId
        console.log("fetchURL : ",fetchURL);
        return axios.get(fetchURL)
            .then(response => {
                let results = response.data;
                console.log("Results :",results);
                return results;
            })
    }

}


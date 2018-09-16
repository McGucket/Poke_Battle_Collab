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
        let fetchURL;
        if (parseInt(heroId) > parseInt(enemyId)) {
            fetchURL = "http://localhost:3000/Pokemon" + "?id=" + enemyId + "&id=" + heroId + "&_sort=id&_order=desc"
        }
        else if (parseInt(heroId) < parseInt(enemyId)) {
            fetchURL = "http://localhost:3000/Pokemon" + "?id=" + enemyId + "&id=" + heroId + "&_sort=id&_order=asc"
        }
        console.log(fetchURL)
        return axios.get(fetchURL)
            .then(response => {
                let results = response.data;
                return results;
            })
    }

}


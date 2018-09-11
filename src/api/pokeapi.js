var axios = require('axios');


module.exports = {
    fetchAllPokemons: function () {
        var jsonURL = window.encodeURI("https://api.myjson.com/bins/1eln1c"); //Not really needed, link is already a URL

        return axios.get(jsonURL)
            .then(response => {
                console.log(response.data)
                return response.data.Pokemon;
            });
    },
    // getPokedexData: function(pokemonName) () {
    //     var jsonURL = window.encodeURI("https://api.myjson.com/bins/609ts");

    //     return 
    // }
}

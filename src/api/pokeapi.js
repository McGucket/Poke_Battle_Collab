const axios = require('axios');

const jsonURL = 'http://localhost:3000/Pokemon'; // Not really needed, link is already a URL
const radix = require('radix');

module.exports = {
  fetchAllPokemons() {
    return axios.get(jsonURL)
      .then(response => response.data);
  },
  getPokedexData(entryId) {
    return axios.get(jsonURL)
      .then((response) => {
        const results = response.data;
        const pokeArr = results.find((pokemon) => {
          if (pokemon.id === parseInt(entryId, radix)) {
            return pokemon;
          }
          return pokeArr;
        });
        return pokeArr;
      });
  },

  fetchCombatants(heroId, enemyId) {
    let fetchURL;
    if (parseInt(heroId, radix) > parseInt(enemyId, radix)) {
      fetchURL = `${'http://localhost:3000/Pokemon?id='}${enemyId}&id=${heroId}&_sort=id&_order=desc`;
    } else if (parseInt(heroId, radix) < parseInt(enemyId, radix)) {
      fetchURL = `${'http://localhost:3000/Pokemon?id='}${enemyId}&id=${heroId}&_sort=id&_order=asc`;
    }
    return axios.get(fetchURL)
      .then((response) => {
        const results = response.data;
        return results;
      });
  },

};

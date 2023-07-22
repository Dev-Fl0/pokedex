const pokemonAPIMapper = {
    async fetchUrl () {
        const url = "https://api-pokemon-fr.vercel.app/api/v1/pokemon";
        const httpResponse = await fetch(url);
        const allPokemons = await httpResponse.json();
        return allPokemons;
    },
   
    async getFirstTwentyPokemon () {
        const allPokemons = await pokemonAPIMapper.fetchUrl();
        const pokemonTableFirstTwenty = allPokemons.slice(1, 21);
        return pokemonTableFirstTwenty;
    }
}

module.exports = pokemonAPIMapper;

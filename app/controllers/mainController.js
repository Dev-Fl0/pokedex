const pokemonAPIMapper = require("../datamapper/pokemonAPIMapper");

const mainController = {
    async generateFirstTwentyPokemon (req, res) {
        try {
            firstTwentyPokemon = await pokemonAPIMapper.getFirstTwentyPokemon();
            res.render('home', {pokemons: firstTwentyPokemon});
        } catch (error) {
            res.status(500).render('home', {
                error,
                message: "Une erreur a eu lieu avec la base de données"
            })
        }
    }
}

module.exports = mainController;

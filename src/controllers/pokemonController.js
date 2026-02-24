// Example: When someone visits /pokemon/pikachu
// Routes say: "Pokemon requests? Go to pokemonController!"
router.get('/pokemon/:nameOrId', pokemonController.getPokemonDetails);
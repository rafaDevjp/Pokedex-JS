

// 

const PokeAPI = {}

function convertPokeApiToDetailsToPokemon(pokeDetails){
        const pokemon = new Pokemon();
        pokemon.name = pokeDetails.name;
        pokemon.order = pokeDetails.id;

        const types = pokeDetails.types.map((typeSlot) => typeSlot.type.name );
        const [type] = types;

        pokemon.types = types;
        pokemon.typeMain = type;
        pokemon.imagem = pokeDetails.sprites.other.dream_world.front_default;
        pokemon.weight = pokeDetails.weight
        pokemon.species = pokeDetails.species

        return pokemon;
}

PokeAPI.getpokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiToDetailsToPokemon);
}

PokeAPI.getPokemon = (offset, limit ) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then( res =>  res.json())
    .then( jsonBody => jsonBody.results)
    .then( pokemons => pokemons.map(PokeAPI.getpokemonDetail))
    .then( (detailRequests) => Promise.all(detailRequests))
    .then( pokemonDetails => pokemonDetails)
    .catch( err =>  console.error(err));
}

PokeAPI.getPokeDetails = (params) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${params}`

    return fetch(url)
            .then( res =>  res.json())
            .then(convertPokeApiToDetailsToPokemon);
}

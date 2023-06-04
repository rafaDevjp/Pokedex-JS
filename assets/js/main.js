

const pokemonListHTML = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')


let offset = 0; 
const limit = 5;
const maxRecords  = 151;

// --------------------------------

function convetpokemonToHTML(pokemon) {
    return `
                <li onclick="nextTo(${pokemon.order})" class="pokemon ${pokemon.typeMain}">
                    <span class="number">#${pokemon.order}</span>
                    <span class="name">${pokemon.name}</span>
                    <div  class="detalhes">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                        <img src="${pokemon.imagem}" alt="${pokemon.name}">
                    </div> 
                </li>
            `
}

function loadPokemonItens(offset, limit){
    PokeAPI.getPokemon(offset, limit).then((pokemons = []) => {
        const newHtml  = pokemons.map( pokemon => convetpokemonToHTML(pokemon) ).join('')
        pokemonListHTML.innerHTML += newHtml
   
       }).catch((err) => console.error(err));
}


loadPokemonItens(offset, limit);



loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecord = offset + limit

    if (qtdRecord >= maxRecords) {
        const newList = maxRecords - offset
        loadPokemonItens(offset, newList);
        loadMoreButton.style.display = 'none'
    }else{
        loadPokemonItens(offset, limit);
    }
})

function nextTo(param) {
    window.location.href = `detail.html?id=${param}`;
}

function goBack() {
    window.location.href = "/";
}


// nextToPage.addEventListener('click', () => {
//     nextTo();
// })









    









console.log("DETAILS JS GO!");

const body = document.getElementById('body')
const banner = document.getElementById('banner')


function goBack() {
    window.location.href = "/";
}


function convertPokemon(pokemon){
    return `
    <div id="pokemon" class="pokemon-details">
        <div class="titles">
            <h1 class="name">${pokemon.name}</h1>
            <h1 class="number">${pokemon.order}</h1>
        </div>
        <div class="detalhes">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
        </ol>
            <img src="${pokemon.imagem}" alt="${pokemon.name}"
        </div>
    </div>
`
}



function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    const id = urlParams.get("id")
    PokeAPI.getPokeDetails(id).then( pokemon =>{ 
        console.log("::::::::::::", pokemon)
        body.className = pokemon.typeMain
        const newHtml = convertPokemon(pokemon)
        banner.innerHTML += newHtml


      
    })
}

getData()
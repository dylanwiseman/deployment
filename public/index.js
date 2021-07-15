 // This is the random pokemon generator:
const pokemonBtn = document.querySelector("button")
const div = document.getElementById("container")

const clickButton = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=251`).then((res) => {
        randomIndex = Math.floor(Math.random()*res.data.results.length)
        console.log(randomIndex)
        randomPokemon = res.data.results[randomIndex].name
        console.log(randomPokemon)
        let pokemonLink = document.createElement('a')
        let pokemonImg = document.createElement('img')
        pokemonLink.href = `href=http://pokemondb.net/pokedex/${randomPokemon}`
        pokemonImg.src = `https://img.pokemondb.net/sprites/black-white/anim/normal/${randomPokemon}.gif`
        div.appendChild(pokemonLink)
        pokemonLink.appendChild(pokemonImg)
    })

}



   pokemonBtn.addEventListener('click',clickButton)

let url = "https://pokeapi.co/api/v2/pokemon/lucario";
let fluidContainer = document.getElementsByClassName("container-fluid")[0];

function getTypes(pokemonJSON){
    let types = [];
    for(type of pokemonJSON.types){
        types.push(type.type.name)
      }
      return types;
}

function getMoves(pokemonJSON){
    let moves = [];
    for (move of pokemonJSON.moves){
        moves.push(move.move.name)
    }
    return moves;
}

function getAbilities(pokemonJSON){
    let abilities =[];
    for (ability of pokemonJSON.abilities){
        abilities.push(ability.ability.name)
    }
    return abilities;
}

function createPokemonElement(pokemon){
    //h1 tag for name
    let h1 = document.createElement("h1")
    h1.innerText = pokemon.name;
    //h2 tag for number
    let h2 = document.createElement("h2")
    h2.innerText = pokemon.number;
    //img tag
    let img = document.createElement("img")
    img.src = pokemon.sprites
    
    //p tag for type
    let p = document.createElement("p")
    for(type of pokemon.types){
        p.innerText += `${type}`
    }
    //ul tag for moves
    let moveUl = document.createElement("ul")
    for(let move of pokemon.moves){
        moveUl.innerHTML += `<li>${move}</li>`
    }
    //ul tag for abilities
    let abilityUl = document.createElement("ul")
    for(let ability of pokemon.abilities){
        abilityUl.innerHTML += `<li>${ability}</li>`
    
    
    //div container
    let div = document.createElement("div")
    div.append(img,h1, h2, p, moveUl, abilityUl) 
    document.body.appendChild(div)
    fluidContainer.appendChild(div)
    }
}

fetch(url)
.then((resp) => resp.json())
.then(function(data){
console.log(data)
let name = data.name;
let number = data.id;  
let types= getTypes(data)
let moves = getMoves(data)
let abilities = getAbilities(data) 
let sprite = data.sprites.front_default
let lucario = new Pokemon(name,number,types,moves,abilities,sprite) 
console.log(lucario)
createPokemonElement(lucario)
})
.catch(function(error){
 console.log(error)
})


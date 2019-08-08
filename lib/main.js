let url = "https://pokeapi.co/api/v2/pokemon/lucario";

fetch(url)
.then((resp) => resp.json())
.then(function(data){
console.log(data)
   


});


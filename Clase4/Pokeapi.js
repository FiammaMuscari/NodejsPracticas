const fetch = (url) => import('node-fetch').then(({default:fetch}) => fetch(url));

// let pokemones = fetch("http://pokeapi.co/api/v2/pokemon");

//segunda promesa
// pokemones.then(res => res.json()).then(data =>{
//     console.log(data)
// }).catch(err=> console.log());

function obtener_pokemon(id){
    let url = "http://pokeapi.co/api/v2/pokemon/" + id;
    return fetch(url).then(res=>{return res.json()})
}

// obtener_pokemon(1).then(data =>{
//     console.log(data.name);
//     return obtener_pokemon(2)
// }).then(data => {
//     console.log(data.name);
//     return obtener_pokemon(3);
// }).then(data => {
//     console.log(data.name);
//     return obtener_pokemon(4);
// }).then(data => {
//     console.log(data.name);
//     return obtener_pokemon(5);
// }).then(data => {
//     console.log(data.name);
// })
// devuelve 
// ivysaur
// venusaur
// charmander

async function nombrar_pokemones(){
    for(let i =  1; i<2 ; i++){
        let pokemon = await obtener_pokemon(i);// pokemon = obtener_pokemon(i).then(res=> res)
        console.log(pokemon); //con pokemon.name solo devuelve nombre
    }
}
nombrar_pokemones();
// let gen1 = generacionUno()

async function generacionUno(){

    let array = [];
    for (let i = 1; i <=25; i++) {
         let pokemon = await obtener_pokemon(i);
         array.push(pokemon);
        
    }
    return array;
}

generacionUno().then(gen1 =>{
    let miArray = gen1.map(pokemon => ({
        name: pokemon.name,
        pokedexNumber: pokemon.order,
        stats: pokemon.stats,
        weight: pokemon.weight
    }));
    console.log(miArray);
});




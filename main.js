const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');
const results = document.querySelector('#results');
const btnSiguiente = document.querySelector('#btnSiguiente');
const btnAnterior = document.querySelector('#btnAnterior');


 const getSuperhero = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;

}
 
searchBtn.addEventListener('click', async () => {
  
  const superhero = await getSuperhero(searchInput.value);
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h1>${superhero.name}</h1>
    <img src="${superhero.sprites.front_default}" alt="" />
    <h2>${superhero.types[0].type.name}</h2>
    <p>${superhero.abilities[0].ability.name}</p>
  `;
  results.appendChild(card);

});
/* // 1. Función para obtener la lista de Pokémon
const getPokemonList = async (offset) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=\${offset}`);
  const data = await response.json();
  return data.results;
};

// 2. Función para mostrar la información de un Pokémon en el HTML
const displayPokemon = async (pokemon) => {
  const pokeData = await getSuperhero(pokemon.url);
  // Aquí puede agregar código para mostrar la información de 'pokeData' en el HTML
  console.log(pokeData);
};

// 3. Función para manejar la paginación
let currentPage = 0;

const loadNextPage = async () => {
  const pokemonList = await getPokemonList(currentPage * 30);
  currentPage++;

  // Llamar a la función 'displayPokemon' para cada Pokémon en la lista
  for (const pokemon of pokemonList) {
    await displayPokemon(pokemon);
  }
};

// 4. Llamar a la función para cargar la primera página de Pokémon
loadNextPage(); */

/* 
  btnSiguiente.addEventListener('click', () => {
    if(pagina < 1){
      pagina += 1;
      getSuperhero();
    }
  });
  
  btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
      pagina -= 1;
      getSuperhero();
    }
  }); */



 /*  formato poke api prueba funcional 
 async function obtenerSuperheroe(id) {
    // Reemplaza YOUR_API_KEY con tu clave de API real
   
    const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error al obtener datos de la API:', error);
    }
  }
  
  obtenerSuperheroe(2); // Obtiene información sobre el superhéroe con ID 1
  
 */
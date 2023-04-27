const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#searchInput');
const results = document.querySelector('#results');
const btnSiguiente = document.querySelector('#btnSiguiente');
const btnAnterior = document.querySelector('#btnAnterior');


 const getSuperhero = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name`);
  const data = await response.json();
  console.log(data);
  return data;

}

const busquedaId = async(id) =>{
  const responseid = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  
  /* console.log(response); */
  const dataid = await responseid.json();
/*   console.log(data); */
  return dataid;
}

/* const paginacion = () => {
  for(let i=0; i<20; i++){
    getSuperhero(i);
  }

} */

(async () =>{
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name`); 
    console.log(response);
    
    const data = await response.json();
    data.results.forEach(element => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
     
     <div class="face front">
     <h1 class="container bg-gradient m-2 w-auto mt-3">${element.name}</h1>
     <div><img class="foto mt-5" src="${element.image}" alt="xxxxx" style="width: auto;" /><br></div>
     
     <h2 class=" mt-5">${element.location.name}</h2>
     
     <p>${element.species}</p>
     <p>${element.status}</p>
     </div>
     <div class="face back">
         <h3>Episodios</h3>
         <p>${element.episode}</p>
     </div>
 
    
   `;
   results.appendChild(card);
   });
   
})();

searchBtn.addEventListener('click', async () => {
  
  const buscarid = await busquedaId(searchInput.value);
  console.log(buscarid);
 /*  let results="" */
  /* superhero.results.forEach(element => { */
    const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    
  <div class="face front">
  <h1 class="container bg-gradient m-2 w-auto mt-3">${buscarid.name}</h1>
  <div><img class="foto mt-5" src="${buscarid.image}" alt="xxxxx" style="width: auto;" /><br></div>
  
  <h2 class=" mt-5">${buscarid.location.name}</h2>
  
  <p>${buscarid.species}</p>
  <p>${buscarid.status}</p>
  </div>
  <div class="face back">
      <h3>Episodios</h3>
      <p>${buscarid.episode}</p>
      <div class="link">
          <a href="#">Details</a>
      </div>
  </div>

   
  `;
  results.appendChild(card);
  });
  

/* }); */
/* 
 
// 1. Función para obtener la lista de Pokémon
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

    for (const pokemon of pokemonList) {
    await displayPokemon(pokemon);
  }
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

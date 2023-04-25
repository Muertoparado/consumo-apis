const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

 const getSuperhero = async (id) => {
 
 /*  const corsProxy = 'https://api.allorigins.win/raw?url=';
  const response = await fetch(`\${corsProxy}https://superheroapi.com/api/6263517990360546/${id}`,{
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });  */
  
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;

 }
/* getSuperhero(3);  */

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

/* 
  btnSiguiente.addEventListener('click', () => {
    if(pagina < 10){
      pagina += 1;
      getApi();
    }
  });
  
  btnAnterior.addEventListener('click', () => {
    if(pagina > 1){
      pagina -= 1;
      getApi();
    }
  });
 */


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
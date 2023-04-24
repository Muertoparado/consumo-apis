const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const results = document.getElementById('results');

const getSuperhero = async (id) => {
 
 /*  const corsProxy = 'https://api.allorigins.win/raw?url=';
  const response = await fetch(`\${corsProxy}https://superheroapi.com/api/6263517990360546/${id}`,{
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }); */
  
  const response = await fetch(`https://superheroapi.com/api/6263517990360546/${id}`
  ,{
     headers: {
      "Access-Control-Allow-Origin": "*"
      
    }}
  );
  const data = await response.json();
  console.log(data);
  return data;
}

searchBtn.addEventListener('click', async () => {

  const superhero = await getSuperhero(searchInput.value);
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img src="${data.superhero.image.url}" alt="${data.superhero.name}" />
    <h2>${data.superhero.name}</h2>
    <p>${data.superhero.biography.publisher}</p>
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


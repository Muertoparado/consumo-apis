let nombre=document.querySelector(`[name="cajaInput"]`);
let img= document.querySelector("#img");
let habilitar= document.querySelector("#habilidad");

async function getApi() {
    try {
      const response = await fetch('https://spotify117.p.rapidapi.com/search/?keyword=romantic%20songs&type=%3CREQUIRED%3E');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    getApi();
    cajaInput.addEventListener("click", () =>{
      let box=cajaInput.value;

      let canciones = '';
			data.results.forEach(element => {
				element += `
					<div class="pelicula">
						<img class="poster" src="https://search?q=artist%3AQueen&type=album${}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});
    });


  }

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



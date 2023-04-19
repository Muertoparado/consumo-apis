let nombre=document.querySelector("[name="cajaInput"]");
let img= document.querySelector("#img");
let habilitar= document.querySelector("#habilidad");

async function getApi() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }



//Arreglos
//let amigos = [];

//Funciones 

function seleccionarAmigoAleatorio(amigos) {
  if (amigos.length === 0) {
    alert("La lista de amigos está vacía.");
    return null;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  return amigos[indiceAleatorio];
}

// Ejemplo de uso:
const amigos = []; // Cambia esto para probar
const amigoSeleccionado = seleccionarAmigoAleatorio(amigos);

if (amigoSeleccionado !== null) {
  console.log("Amigo seleccionado:", amigoSeleccionado);
}

const amigoSeleccionado = seleccionarAmigoAleatorio(amigos);
console.log("Amigo seleccionado:", amigoSeleccionado);


//function validarAmigos(params) {}
//function ordenaraleatorio(){}   


//function reiniciarJuego() {}
//function agregarAmigos (){}
//function limpiarListaexistente(){}
//function ValidarEntrada (){}
//function MostrarListadoAmigos (){}
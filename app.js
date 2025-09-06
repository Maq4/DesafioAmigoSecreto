
// Arreglos
let amigos = ();
let amigosSeleccionados = []; // Si deseas guardar los seleccionados

// Función para seleccionar un amigo aleatorio
function seleccionarAmigoAleatorio(amigos) {
  if (amigos.length === 0) {
    alert("⚠️ La lista de amigos está vacía.");
    return null;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  return amigos[indiceAleatorio];
}

// Uso de la función
let amigo = seleccionarAmigoAleatorio(amigos);

if (amigo !== null) {
  alert("🎉 Amigo seleccionado: " + amigo);
  console.log("Amigo seleccionado:", amigo);
  // amigosSeleccionados.push(amigo); // Si deseas guardarlo
}



//function validarAmigos(params) {}
//function ordenaraleatorio(){}   


//function reiniciarJuego() {}
//function agregarAmigos (){}
//function limpiarListaexistente(){}
//function ValidarEntrada (){}

//function MostrarListadoAmigos (){}


// Arreglos
let amigos = [];
let amigosSeleccionados = ''; // Si deseas guardar los seleccionados
let lista = document.getElementById("listaAmigos")
let resultado = document.getElementById("resultado")

function agregarAmigo (){
  let seleccionado = document.getElementById("amigo").value
  if (!validarEntrada(seleccionado)){
    alert("⚠️ Por favor, inserte un nombre.");
    return null;
  }
  amigos.push(seleccionado)
  document.getElementById("amigo").value = ''
  lista.innerHTML = ""
  recorrerLista()
}

function recorrerLista (){
  amigos.map((amigo)=>{
    const li = document.createElement('li');
		li.textContent = amigo;
		lista.appendChild(li);
  })
}



// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ La lista de amigos está vacía.");
    return null;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  amigosSeleccionados = amigos[indiceAleatorio];
  resultado.innerHTML = ""
  const li = document.createElement('li');
	li.textContent = amigosSeleccionados;
  resultado.appendChild(li);
}

function validarEntrada (seleccionado){
  if (seleccionado.trim() === ''){
    return false
  }
  return true
}

function reiniciarJuego() {
  lista.innerHTML = ""
  resultado.innerHTML = ""
  document.getElementById("amigo").value = ''
  amigos = [];
  amigosSeleccionados = '';
}

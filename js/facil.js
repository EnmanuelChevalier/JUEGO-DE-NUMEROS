let nivel = 1;
let min = 1;
let max = 5;
let numeroSecreto;
let intentos = 3;
let puntos = 0;

function iniciarJuegoFacil() {
  nivel = 1;
  min = 1;
  max = 5;
  intentos = 3;
  puntos = 0; // Reiniciar puntos al iniciar el juego
  generarNuevoNumeroFacil();
  actualizarInterfaz();
}

function generarNuevoNumeroFacil() {
  numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("rangoTexto").innerText = `Adivina el número del ${min} al ${max}`;
}

function verificarNumeroFacil() {
  let numeroUsuario = parseInt(document.getElementById("entradaNumero").value);

  // Verificar si el número ingresado es igual al número secreto
  if (numeroUsuario === numeroSecreto) {
    // Asignar puntos según el intento
    if (intentos === 3) {
      puntos += 100;
    } else if (intentos === 2) {
      puntos += 50;
    } else if (intentos === 1) {
      puntos += 25;
    }

    document.getElementById("mensaje").innerHTML = "✅ ¡Correcto! Pasas al siguiente nivel.";
    siguienteNivelFacil();
  } else {
    intentos--;
    if (intentos === 0) {
      document.getElementById(
        "mensaje"
      ).innerHTML = `❌ Has fallado. El número era ${numeroSecreto}.`;
      reiniciarJuego();
    } else {
      document.getElementById(
        "mensaje"
      ).innerHTML = `❌ Incorrecto. Te quedan ${intentos} intentos.`;
    }
  }
}

function siguienteNivelFacil() {
  nivel++;
  min += 5;
  max += 5;
  intentos = 3;
  generarNuevoNumeroFacil();
  actualizarInterfaz();
}

function actualizarInterfaz() {
  document.getElementById("nivelTexto").innerText = `Nivel ${nivel}`;
  document.getElementById("entradaNumero").value = "";
  document.getElementById("puntuacionTexto").innerText = `Puntuación: ${puntos}`; // Mostrar puntuación
}

function reiniciarJuego() {
  if (confirm("Fin del juego. ¿Reiniciar?")) {
    iniciarJuegoFacil();
  }
}

window.onload = iniciarJuegoFacil;

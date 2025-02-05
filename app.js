// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let participantes = [];

function agregarAmigo() {
  let entrada = document.getElementById("amigo").value;
  console.log(entrada);

  if (participantes.length >= 10) {
    alert("No puede a ver mas de 10 participantes");
  } else {
    participantes.push(entrada);
  }
  console.log(participantes);
  limpiarcampo();
}

function limpiarcampo() {
  document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (participantes.length !== 0) {
    let personaAleatoria = Math.floor(Math.random() * participantes.length);
    let ganador = participantes[personaAleatoria];
    alert(`El ganador es ${ganador}`);

    participantes.splice(personaAleatoria, 1);
    console.log(participantes);
    console.log(ganador);
  } else {
    alert("No quedan mas participantes");
  }
}

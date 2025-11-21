function generarNumero() {
  var numero = Math.floor(Math.random() * 100) + 1;
  alert("Tu número aleatorio es: " + numero);
}

generarNumero();

var otro = prompt("¿Quieres otro número? (s/n)");
while (otro === "s") {
  generarNumero();
  otro = prompt("¿Quieres otro número? (s/n)");
}

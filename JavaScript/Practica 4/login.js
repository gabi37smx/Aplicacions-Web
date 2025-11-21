var usuario = prompt("Introduce un usuario válido");
var contrasena = prompt("Hola!" + usuario + ", introduce tu password");

if (usuario === "admin" && contrasena === "1234") {
    alert("Bienvemnido de nuevo amigo");
} else if (usuario != "admin") {
    alert("El usuario es incorecto");
} else {
    alert("Te has equivocado al introducir el password.");
} 

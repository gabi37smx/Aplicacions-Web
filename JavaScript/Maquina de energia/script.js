 
function encender() {
    document.getElementById("maquina").style.display = "block"
    document.getElementById("maquina").style.backgroundColor = "green";
    document.getElementById("titulo").innerHTML = "Maquina encendida";
    document.getElementById("mensaje").innerHTML = "La máquina está funcionando"

}

function apagar() {
    document.getElementById("maquina").style.display = "block";
    document.getElementById("maquina").style.backgroundColor = "red";
    document.getElementById("titulo").innerHTML = "Maquina apagada";
    document.getElementById("mensaje").innerHTML = "La máquina está detenida"
} 

function crearMensaje() {
    var mensaje = document.getElementById("maquina").value;
    document.getElementById("mensaje").innerHTML = mensaje;
}
function borrarMensaje() {
    document.getElementById("mensaje").value = "";
}
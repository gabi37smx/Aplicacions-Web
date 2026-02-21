function encender() {
    document.getElementById("maquina").style.display = "block";
    document.getElementById("maquina").style.backgroundColor = "green";
    document.getElementById("titulo").innerHTML = "Máquina encendida";
    document.getElementById("mensaje").innerHTML = "La máquina está funcionando";
}

function apagar() {
    document.getElementById("maquina").style.display = "block";
    document.getElementById("maquina").style.backgroundColor = "red";
    document.getElementById("titulo").innerHTML = "Máquina apagada";
    document.getElementById("mensaje").innerHTML = "La máquina está detenida";
}

function crearMensaje() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Mensaje extra";
    document.getElementById("maquina").appendChild(nuevoParrafo);
}

function borrarMensaje() {
    let maquina = document.getElementById("maquina");

    // Selecciona todos los párrafos dentro del div
    let parrafos = maquina.querySelectorAll("p");

    // Si hay más de uno, borra el último (para no borrar el principal)
    if (parrafos.length > 1) {
        parrafos[parrafos.length - 1].remove();
    }
}


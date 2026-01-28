function cambiarTexto(){
    var parrafo = document.getElementById("texto");
    parrafo.textContent = "Este es el texto nuevo";
}

function cambiarColor() {
    var caja = document.getElementById("caja");
    caja.style.backgroundColor = "yellow";
}
function crearParrafo() {
    var caja = document.getElementById("caja");

    var nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "nuevo párrafo";

    caja.appendChild(nuevoParrafo);
}
function borrarParrafo() {
    var caja = document.getElementById("caja");

    if (caja.children.length > 1) {
        caja.removeChild(caja.lastElementChild);
    }
}
function cambiarTitulo (){
    var titulo = document.getElementById("titulo");
    titulo.textContent = "Nuevo Título";
    titulo.style.color = "blue";
}

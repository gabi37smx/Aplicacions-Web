function nuevoParrafo (){
    var parrafo = document.createElement("p");
    var contenido = document.createTextNode("Este parrafo es nuevo creado automaticamente");
    parrafo.appendChild(contenido);
    document.body.appendChild(parrafo)          
}

function quitarParrafo (){
    var numparrafos = document.getElementsByTagName("p");
    var parrafo =numparrafos[numparrafos.length-1];
    parrafo.parentNode.removeChild(parrafo);
}

function cambiarColor(){
    var parrafo1 = document.getElementById("parrafo1");
    if (parrafo1.style.backgroundColor=="yellow") {
        parrafo1.style.backgroundColor = "white";
    }
    else { parrafo1.style.backgroundColor = "yellow"

    }
}

function ocultarParrafo(){
    var parrafo2 = document.getElementById("parrafo2");
    parrafo2.style.display = "none";
}
function muestraParrafo(){
    var parrafo2 = document.getElementById("parrafo2");
    parrafo2.style.display = "";
}